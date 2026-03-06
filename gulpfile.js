/*

=========================================================
* Volt Free - Bootstrap 5 Dashboard
=========================================================

* Product Page: https://themesberg.com/product/admin-dashboard/volt-premium-bootstrap-5-dashboard
* Copyright 2020 Themesberg
* License: https://themesberg.com/licensing

=========================================================

*/

var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var cleanCss = require("gulp-clean-css");
var del = require("del");
const htmlmin = require("gulp-htmlmin");
const cssbeautify = require("gulp-cssbeautify");
var gulp = require("gulp");
const npmDist = require("gulp-npm-dist");
var sass = require("gulp-sass")(require("sass"));
var wait = require("gulp-wait");
var sourcemaps = require("gulp-sourcemaps");

var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

const fse = require("fs-extra");
const { options: optionsObject } = require("./options");
const { StartFunc: StartFuncFromUnProtected } = require("./GulpCode/RunLast/UnProtected/entryFile");

const { StartFunc: StartFuncFromForTemplateData } = require("./GulpCode/ForTemplateData/V1/entryFile");

var dotenv = require("dotenv");
dotenv.config();

// Load and enhance schema.json
const CommonColumns = require("./schema.json");
const CommonTables = require("./tables.json");

// Define paths
const paths = {
    dist: {
        base: "./dist/",
        css: "./dist/css",
        html: "./dist/pages",
        assets: "./dist/assets",
        img: "./dist/assets/img",
        vendor: "./dist/vendor",
    },
    dev: {
        base: "./html&css/",
        css: "./html&css/css",
        html: "./html&css/pages",
        assets: "./html&css/assets",
        img: "./html&css/assets/img",
        vendor: "./html&css/vendor",
    },
    base: {
        base: "./",
        node: "./node_modules",
    },
    src: {
        base: "./src/",
        css: "./src/css",
        html: "./src/pages/**/*.html",
        assets: "./src/assets/**/*.*",
        partials: "./src/partials/**/*.html",
        scss: "./src/scss",
        node_modules: "./node_modules/",
        vendor: "./vendor",
        hbsPath: "./src/partials/Hbs"
    },
    temp: {
        base: "./.temp/",
        css: "./.temp/css",
        html: "./.temp/pages",
        assets: "./.temp/assets",
        vendor: "./.temp/vendor",
    },
};

// var templateData = StartFuncFromForTemplateData({ inCommonColumns: CommonColumns });
var templateData;

// Gulp tasks

gulp.task("scss", function () {
    return gulp
        .src([
            paths.src.scss + "/custom/**/*.scss",
            paths.src.scss + "/volt/**/*.scss",
            paths.src.scss + "/volt.scss",
        ])
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ["> 1%"] }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.temp.css))
        .pipe(browserSync.stream());
});

gulp.task("index", function () {
    return gulp
        .src([paths.src.base + "*.html"])
        .pipe(handlebars(templateData, optionsObject))
        .pipe(rename((path) => {
            console.log("Renaming path: ", path);
            return {
                dirname: path.dirname,
                basename: path.basename,
                extname: ".html"
            };
        }))
        .pipe(gulp.dest(paths.temp.base))
        .pipe(browserSync.stream());
});

gulp.task("html", function () {
    return gulp
        .src([paths.src.html])
        .pipe(handlebars(templateData, optionsObject))
        .pipe(rename((path) => {
            return {
                dirname: path.dirname,
                basename: path.basename,
                extname: ".html"
            };
        }))
        .pipe(gulp.dest(paths.temp.html))
        .pipe(browserSync.stream());
});

gulp.task("assets", function () {
    return gulp
        .src([paths.src.assets])
        .pipe(gulp.dest(paths.temp.assets))
        .pipe(browserSync.stream());
});

gulp.task("vendor", function () {
    return gulp
        .src(npmDist(), { base: paths.src.node_modules })
        .pipe(gulp.dest(paths.temp.vendor));
});

gulp.task("copy:dev:js", function () {
    return gulp.src("src/Js/**/*.*")
        .pipe(gulp.dest(".temp/Js"));
});

gulp.task(
    "serve",
    gulp.series("scss", "html", "index", "assets", "vendor", "copy:dev:js", function () {
        browserSync.init({ server: paths.temp.base, startPath: "/pages/index.html" });

        gulp.watch(
            [
                paths.src.scss + "/volt/**/*.scss",
                paths.src.scss + "/custom/**/*.scss",
                paths.src.scss + "/volt.scss",
            ],
            gulp.series("scss")
        );
        gulp.watch(
            [paths.src.html, paths.src.base + "*.html", paths.src.partials],
            gulp.series("html", "index")
        );
        gulp.watch([paths.src.assets], gulp.series("assets"));
        gulp.watch([paths.src.vendor], gulp.series("vendor"));
        gulp.watch(["src/Js/**/*.*"], gulp.series("copy:dev:js"));
    })
);

gulp.task("beautify:css", function () {
    return gulp
        .src([paths.dev.css + "/volt.css"])
        .pipe(cssbeautify())
        .pipe(gulp.dest(paths.dev.css));
});

gulp.task("minify:css", function () {
    return gulp
        .src([paths.dist.css + "/volt.css"])
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.dist.css));
});

gulp.task("minify:html", function () {
    return gulp
        .src([paths.dist.html + "/**/*.html"])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(handlebars(templateData, optionsObject))
        .pipe(rename((path) => {
            return {
                dirname: path.dirname,
                basename: path.basename,
                extname: ".html"
            };
        }))
        .pipe(gulp.dest(paths.dist.html));
});

gulp.task("minify:html:index", function () {
    return gulp
        .src([paths.dist.base + "*.html"])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(handlebars(templateData, optionsObject))
        .pipe(rename((path) => {
            return {
                dirname: path.dirname,
                basename: path.basename,
                extname: ".html"
            };
        }))
        .pipe(gulp.dest(paths.dist.base));
});

gulp.task("clean:dist", function () {
    return del([paths.dist.base]);
});

gulp.task("copy:dist:css", function () {
    return gulp
        .src([
            paths.src.scss + "/volt/**/*.scss",
            paths.src.scss + "/custom/**/*.scss",
            paths.src.scss + "/volt.scss",
        ])
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ["> 1%"] }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.dist.css));
});

gulp.task("copy:dist:html", function () {
    return gulp
        .src([paths.src.html])
        .pipe(handlebars(templateData, optionsObject))
        .pipe(rename((path) => {
            return {
                dirname: path.dirname,
                basename: path.basename,
                extname: ".html"
            };
        }))
        .pipe(gulp.dest(paths.dist.html))
});

gulp.task("copy:dist:assets", function () {
    return gulp.src(paths.src.assets).pipe(gulp.dest(paths.dist.assets));
});

gulp.task("copy:dist:vendor", function () {
    return gulp
        .src(npmDist(), { base: paths.src.node_modules })
        .pipe(gulp.dest(paths.dist.vendor));
});

gulp.task("copy:dist:html:index", function () {
    return gulp
        .src([paths.src.base + "*.html"])
        .pipe(handlebars(templateData, optionsObject))
        .pipe(rename((path) => {
            return {
                dirname: path.dirname,
                basename: path.basename,
                extname: ".html"
            };
        }))
        .pipe(gulp.dest(paths.dist.base));
});

gulp.task("end:dist", async () => {
    // fse.copySync(`${paths.src.base}/Js`, `${paths.dist.base}/Js`);

    // LocalFuncChangeJsConfig({ inDistPath: paths.dist.base });
    // StartFuncFromUnProtected({
    //     inDistPath: paths.dist.base,
    //     inCommonColumns: CommonColumns
    // });

    return await true;
});

gulp.task("generate:tables", (done) => {
    const runNext = (i) => {
        if (i >= CommonTables.tables.length) return done();

        buildForTable(CommonTables.tables[i], () => runNext(i + 1));
    };

    runNext(0);
});

function buildForTable(inTableSchema, done) {
    const table = inTableSchema.tableName;

    paths.dist.base = `./dist/${table}/`;
    paths.dist.css = `./dist/${table}/css`
    paths.dist.html = `./dist/${table}/pages`;
    paths.dist.assets = `./dist/${table}/assets`;
    paths.dist.img = `./dist/${table}/assets/img`;
    paths.dist.vendor = `./dist/${table}/vendor`;

    templateData = StartFuncFromForTemplateData({ inCommonColumns: inTableSchema });

    fse.copySync(`${paths.src.base}/Js`, `${paths.dist.base}/Js`);

    StartFuncFromUnProtected({
        inDistPath: paths.dist.base,
        inCommonColumns: inTableSchema
    });

    return gulp.series(
        "copy:dist:css",
        "copy:dist:html",
        "copy:dist:html:index",
        "copy:dist:assets",
        "minify:css",
        "minify:html",
        "minify:html:index",
        "copy:dist:vendor"
    )(done);
};

gulp.task("build:dist", gulp.series("generate:tables"));
// gulp.task("build:dist", gulp.series("clean:dist", "copy:dist:css", "copy:dist:html", "copy:dist:html:index", "copy:dist:assets", "minify:css", "minify:html", "minify:html:index", "copy:dist:vendor", "end:dist"));

gulp.task("default", gulp.series("serve"));
