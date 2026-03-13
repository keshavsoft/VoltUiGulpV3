import { StartFunc as StartFuncFor200Res } from "./For200Res/entryFile.js";

let StartFunc = ({ inResponseAsText }) => {
    StartFuncFor200Res({ inResponseAsText });
};

export { StartFunc };