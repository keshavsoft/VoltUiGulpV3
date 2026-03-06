import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as StartFuncFromAfterFetch } from './AfterFetch/entryFile.js';

const StartFunc = async (e) => {
    let jVarLocalTableName = e.target.innerText;
    
    let localResponse = await StartFuncFetchFuncs({ inTableName: jVarLocalTableName });

    StartFuncFromAfterFetch({ inResponse: localResponse, inTableName: jVarLocalTableName });
};

export { StartFunc };
