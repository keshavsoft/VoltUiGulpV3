import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status500 } from "./status500.js";
import { StartFunc as status401 } from "./status401.js";
import { StartFunc as status409 } from "./status409.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();

        Status200({ inRowPk: jVarLocalSavedPk });
    };

    if (jVarLocalResponse.status === 500) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        Status500({ inResponse: jVarLocalSavedPk });
    };

    if (jVarLocalResponse.status === 401) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        status401({ inResponse: jVarLocalSavedPk });
    };


    if (jVarLocalResponse.status === 409) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        status409({ inResponse: jVarLocalSavedPk });
    };
};

export { StartFunc }