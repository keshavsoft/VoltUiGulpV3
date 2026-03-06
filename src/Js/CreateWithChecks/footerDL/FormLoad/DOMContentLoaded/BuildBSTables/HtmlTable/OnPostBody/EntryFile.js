import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncTableFooterSaveButtonId();
    let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");
    if ($autoFocusInput.length > 0) {
        $autoFocusInput[0].focus();
    };
};

export { StartFunc };