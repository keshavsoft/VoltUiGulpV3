import { StartFunc as StartFunctoInputValues } from "./toInputValues.js";
import { StartFunc as StartFunctoSubTable } from "./toSubTable.js";

let StartFunc = ({ inResponseAsJson }) => {
    StartFunctoInputValues({ inResponseAsJson });
    StartFunctoSubTable({ inResponseAsJson: inResponseAsJson.ForeignkeyTableData });
};

export { StartFunc };