import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";

let StartFunc = async ({ inCurrentTarget }) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inCurrentTarget });
    StartFuncAfterFetch({ inResponse: jVarLocalDataNeeded });
};

export { StartFunc }