import { StartFunc as StartFuncFromForLogout } from "../../../../CommonJs/ForLogout/entryFile.js";

import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromBuildBSTables } from "./BuildBSTables/entryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";

let StartFunc = () => {
    StartFuncFromForLogout();

    StartFuncFromAddListeners();
    StartFuncFromBuildBSTables();
    StartFuncFromShowOnDom();
};

export { StartFunc };