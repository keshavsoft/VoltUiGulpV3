import { StartFunc as StartFuncFromOnClickRow } from "./OnClickRow/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    let LocalConfig = {
        onClickRow: StartFuncFromOnClickRow
    };

    $table.bootstrapTable(LocalConfig);

};

export { StartFunc };
