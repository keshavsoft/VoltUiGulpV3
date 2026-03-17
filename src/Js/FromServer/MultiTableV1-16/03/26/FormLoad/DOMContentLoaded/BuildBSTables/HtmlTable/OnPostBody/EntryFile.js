import { StartFunc as StartFuncFetchAsGetForDatalist } from "./FetchAsGetForDatalist/entryFile.js";
import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncFetchAsGetForDatalist();
    StartFuncTableFooterSaveButtonId();
};

export { StartFunc };