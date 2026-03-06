import EndPointJson from './endPoint.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = EndPointJson.GetEndPoint;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

