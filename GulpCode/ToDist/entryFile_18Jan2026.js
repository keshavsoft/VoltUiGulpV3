const fs = require("fs");

const StartFunc = ({ inDistPath, inCommonColumns }) => {
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

    contentAsJson.DataTableOptions = CommonColumns.DataTableOptions;

    fs.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

module.exports = { StartFunc };