import { StartFunc as StartFuncFromForDefaultValue } from "./forDefaultValue.js";

let StartFunc = (inData, inOptions) => {
    // const k1 = inOptions.$tableFooter[0].querySelectorAll("th")[1].querySelector("input");
    const jVarLocalColumns = inOptions.columns;
    // console.log("jVarLocalColumns", jVarLocalColumns);
    const jVarLocalFooterCells = inOptions.$tableFooter[0].querySelectorAll("th");

    StartFuncFromForDefaultValue({
        inColumns: inOptions.columns,
        inFooterCells: jVarLocalFooterCells
    });

    LocalFuncSetFocus();
};

const LocalFuncSetFocus = () => {
    let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");

    if ($autoFocusInput.length > 0) {
        $autoFocusInput[0].focus();
    };
};

export { StartFunc };