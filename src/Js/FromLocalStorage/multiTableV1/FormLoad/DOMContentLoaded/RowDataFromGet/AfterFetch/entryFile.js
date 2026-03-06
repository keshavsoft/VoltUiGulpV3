import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status500 } from "./status500.js";

let StartFunc = async ({ inDataToShow }) => {
    let jVarLocalResponse = await inDataToShow;
console.log("jVarLocalResponse:",jVarLocalResponse);

    if (jVarLocalResponse) {
        let jVarLocalSavedPk = await jVarLocalResponse;
        Status200({ inResponse: jVarLocalSavedPk });
    };

    // if (jVarLocalResponse.status === 500) {
    //     let jVarLocalSavedPk = await jVarLocalResponse.text();
    //     Status500({ inResponse: jVarLocalSavedPk });
    // };
};

export { StartFunc }