import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonTableName from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "inRowPk" });

    let jVarLocalCommonTable = CommonTableName.TableName;
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${jVarLocalGetEndPoint}/FK/${jVarLocalFilterString}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

