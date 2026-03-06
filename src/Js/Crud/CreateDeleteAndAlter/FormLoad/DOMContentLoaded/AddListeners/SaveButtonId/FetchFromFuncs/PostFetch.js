import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import UrlJson from "./url.json" with { type: "json" };
import commonConfig from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarTableName = commonConfig.TableName;

    let LocalroutePath = UrlJson.PostendPoint;

    let jVarLocalFilterString = getUrlQueryParams();

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `${jVarTableName}/${LocalroutePath}/${jVarLocalFilterString}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let getUrlQueryParams = () => {
    let jVarLocalId = document.getElementById("HtmlId-pk");
    return jVarLocalId.value;
};

export { StartFunc };

