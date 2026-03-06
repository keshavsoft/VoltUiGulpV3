import { StartFunc as StartFuncFetchFuncs } from "./postFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";

let StartFunc = async ({ inRowPk }) => {
    let jVarLocalFetchResponse = await StartFuncFetchFuncs({ inRowPk });

    if (jVarLocalFetchResponse.status === 200) {
        StartFuncAfterFetch();
    };

    if (jVarLocalFetchResponse.status === 404) {
        Swal.fire({
            title: "not Deleted!",
            text: `The delete end point not found`,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK"
        });
    };
};

export { StartFunc }