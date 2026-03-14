import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncToDataList } from "./ToDataList/entryFile.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    StartFuncToDataList()

};

export { StartFunc };
