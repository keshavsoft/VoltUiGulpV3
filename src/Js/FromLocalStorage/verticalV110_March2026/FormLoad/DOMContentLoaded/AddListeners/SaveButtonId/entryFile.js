import { StartFunc as FetchAsPost } from "./FetchAsPost/entryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("SaveButtonId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", FetchAsPost);
    };
};

export { StartFunc };