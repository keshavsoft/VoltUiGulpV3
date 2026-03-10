const fs = require("fs");
const { StartFunc: StartFuncFromForGenFromPkWithMeta } = require("./forGenFromPkWithMeta");
const { StartFunc: StartFuncFromForGenWMailAndWs } = require("./forGenWMailAndWs");

const StartFunc = ({ inDistPath, inCommonColumns }) => {
    const LocalRepoType = process.env.RepoType;

    switch (LocalRepoType) {
        case "GenWMailAndWs":
            StartFuncFromForGenWMailAndWs({ inDistPath, inCommonColumns });
            break;
        case "GenWMailAndWs":
            StartFuncFromForGenWMailAndWs({ inDistPath, inCommonColumns });
            break;

        default:
            LocalDefaultFunc({ inDistPath, inCommonColumns });
            break;
    };

    const CommonVersionCode = "$ApiVersion";
    const CommonTableNameCode = "$TableName";
    const CommonColumns = inCommonColumns;

    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/Config.json`;

    const content = fs.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);

    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace(CommonTableNameCode, CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace(CommonVersionCode, `${process.env.VERSION}`);
    contentAsJson.OnlyTableName = CommonColumns.tableName;
    contentAsJson.StartApi = CommonVersionCode;

    contentAsJson.DataTableOptions = CommonColumns.DataTableOptions;
    contentAsJson.ForeignkeyTables = CommonColumns.ForeignkeyTables;
    contentAsJson.DependantTables = CommonColumns.DependantTables;

    fs.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

const LocalDefaultFunc = ({ inDistPath, inCommonColumns }) => {
    const CommonVersionCode = "$ApiVersion";
    const CommonTableNameCode = "$TableName";
    const CommonColumns = inCommonColumns;

    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/Config.json`;

    const content = fs.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);

    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace(CommonTableNameCode, CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace(CommonVersionCode, `${process.env.VERSION}`);
    contentAsJson.StartApi = CommonVersionCode;

    contentAsJson.DataTableOptions = CommonColumns.DataTableOptions;

    fs.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

module.exports = { StartFunc };