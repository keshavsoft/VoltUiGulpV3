import UrlJson from "./url.json" with { type: "json" };
import commonConfigJson from "../../../../../Config.json" with { type: "json" };
import thisConfigJson from "../../../config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.PostendPoint;
    const LocalStartRoute = commonConfigJson.StartApi;

    const paramValue =
        new URLSearchParams(window.location.search)
            .get(thisConfigJson.Parent.UrlParam);

    // let jVarLocalFetchUrl = `${jVarTableName}/${LocalroutePath}`;
    let response = await fetch(`/${LocalStartRoute}${LocalroutePath}/${paramValue}`);

    return await response;
};

export { StartFunc };

