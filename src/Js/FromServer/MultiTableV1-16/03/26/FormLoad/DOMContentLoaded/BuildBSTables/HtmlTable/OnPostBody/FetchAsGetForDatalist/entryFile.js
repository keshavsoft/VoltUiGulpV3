import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = async () => {
    let myElements = document.getElementsByClassName('DependantTablesClass');

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].addEventListener('click', StartFuncFetchAsGet);
    };
};

export { StartFunc };