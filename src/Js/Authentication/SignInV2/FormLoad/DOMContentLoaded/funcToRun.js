import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    localStorage.clear()
};

export { StartFunc };
