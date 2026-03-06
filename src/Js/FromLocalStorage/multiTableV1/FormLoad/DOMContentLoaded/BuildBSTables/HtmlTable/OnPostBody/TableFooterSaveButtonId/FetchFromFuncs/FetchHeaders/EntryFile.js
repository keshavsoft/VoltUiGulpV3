import KeysJson from './Keys.json' with {type: 'json'};
import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = ({ inCurrentTarget }) => {
    return StartFuncPrepareBody({ inCurrentTarget });

};



export { StartFunc };