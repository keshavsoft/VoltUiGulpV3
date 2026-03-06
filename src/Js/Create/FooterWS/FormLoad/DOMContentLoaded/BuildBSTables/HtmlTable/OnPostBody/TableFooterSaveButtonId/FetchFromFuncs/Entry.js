import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncFromAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inCurrentTarget }) => {
    let localResponse = await StartFuncFetchFuncs({ inCurrentTarget });

    await StartFuncFromAfterFetch({ inResponse: localResponse });
};

export { StartFunc }