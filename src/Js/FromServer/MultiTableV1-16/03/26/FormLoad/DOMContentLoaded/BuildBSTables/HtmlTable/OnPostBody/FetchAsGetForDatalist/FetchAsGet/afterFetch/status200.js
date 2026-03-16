import { StartFunc as StartFuncFor200Res } from "./For200Res/entryFile.js";

let StartFunc = ({ inResponseAsJson, inTableName }) => {
    StartFuncFor200Res({ inResponseAsJson, inTableName });
};

export { StartFunc };