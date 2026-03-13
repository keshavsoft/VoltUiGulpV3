import { StartFunc as Status200 } from "./status200.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        const responseAsText = await jVarLocalResponse.text();

        Status200({ inResponseAsText: responseAsText });
    };
};

export { StartFunc };