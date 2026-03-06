const fs = require("fs");

const StartFunc = ({ inDistPath, inCommonColumns }) => {
    const CommonColumns = inCommonColumns;

    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/Config.json`;

    const content = fs.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);

    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = `/${process.env.VERSION}/${CommonColumns.tableName}`;

    contentAsJson.Protected.RedirectUrl = contentAsJson.Protected.RedirectUrl3;

    contentAsJson.DataTableOptions = CommonColumns.DataTableOptions;
    contentAsJson.ForeignkeyTables = CommonColumns.ForeignkeyTables;

    fs.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

module.exports = { StartFunc };