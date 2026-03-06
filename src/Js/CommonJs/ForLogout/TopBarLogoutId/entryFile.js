import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = async () => {
    const arrClass = document.getElementById("TopBarLogoutId");

    arrClass.addEventListener("click", StartFuncFetchAsGet);
};

export { StartFunc };