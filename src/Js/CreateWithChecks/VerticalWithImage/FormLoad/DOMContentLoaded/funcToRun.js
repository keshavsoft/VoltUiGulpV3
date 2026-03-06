import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncFromAfterDom } from "./AfterDom/startFunc.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    StartFuncFromAfterDom();
};

export { StartFunc };
