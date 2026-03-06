import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncFromOnClickRow } from "./OnClickRow/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    let LocalConfig = {};
    LocalConfig.onPostBody = StartFuncFromOnPostBody;
    LocalConfig.onClickRow = StartFuncFromOnClickRow;

    $table.bootstrapTable(LocalConfig);
};

export { StartFunc };
