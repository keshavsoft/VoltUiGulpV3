import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncFromOnPostFooter } from "./OnPostFooter/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    let LocalConfig = {};
    LocalConfig.onPostBody = StartFuncFromOnPostBody;
    LocalConfig.onPostFooter = StartFuncFromOnPostFooter;

    $table.bootstrapTable(LocalConfig);
};

export { StartFunc };
