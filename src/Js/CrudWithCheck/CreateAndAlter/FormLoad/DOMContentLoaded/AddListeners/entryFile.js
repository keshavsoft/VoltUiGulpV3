import { StartFunc as StartFuncRefreshBSTableClass } from "./RefreshBSTableClass/entryFile.js";
import { StartFunc as StartFuncSaveButtonId } from "./SaveButtonId/entryFile.js";

let StartFunc = () => {
    StartFuncRefreshBSTableClass();
    StartFuncSaveButtonId()
};

export { StartFunc };