import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncTableFooterSaveButtonId();
    // debugger;
    let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");
    let jVarLocalDataLists = document.querySelectorAll("datalist");

    jVarLocalDataLists.forEach(item => {

        LocalFunc({ inTableName: item.id.replace("HtmlDLId-", "") });
    });
    if ($autoFocusInput.length > 0) {
        $autoFocusInput[0].focus();
    };
};

const LocalFunc = ({ inTableName }) => {
    const carArray = localStorage.getItem(inTableName);
    const jVarLocalParsedArray = JSON.parse(carArray);
    if (jVarLocalParsedArray === null) {
        return
    }
    const jVarLocalHtmlDataList = document.getElementById(`HtmlDLId-${inTableName}`);
    const jVarLocalField = jVarLocalHtmlDataList.dataset.field;

    jVarLocalParsedArray.forEach(function (item) {
        const option = document.createElement('option');
        option.value = item[jVarLocalField];
        jVarLocalHtmlDataList.appendChild(option);
    });
};

export { StartFunc };