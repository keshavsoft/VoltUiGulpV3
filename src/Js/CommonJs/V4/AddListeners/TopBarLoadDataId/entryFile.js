import { StartFunc as StartFuncFuncToRun } from "./buttonClickFunc.js";

let StartFunc = () => {
    const arrClass = document.getElementById("TopBarLoadDataId");

    arrClass.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc };