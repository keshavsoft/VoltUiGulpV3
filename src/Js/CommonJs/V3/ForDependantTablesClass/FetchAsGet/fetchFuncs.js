import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonTableName from '../../../../Config.json' with {type: 'json'};

let StartFunc = async ({ inTableName }) => {
    let jVarLocalTableName = inTableName;
    const jVarLocalCommonTable = CommonTableName.TableName.substring(0, CommonTableName.TableName.lastIndexOf("/"));

    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${jVarLocalTableName}/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

