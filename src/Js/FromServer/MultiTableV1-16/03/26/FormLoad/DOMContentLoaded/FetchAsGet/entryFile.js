import { StartFunc as fetchAsGet } from "./fetchAsGet.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await fetchAsGet();

    StartFuncAfterFetch({ inResponse: jVarLocalDataNeeded });
};

export { StartFunc };
