import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = async () => {
    debugger;
    StartFuncFetchAsGet().then((inData) => { });
};

export { StartFunc };