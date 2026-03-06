import commonConfig from '../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "inRowPk" });

    let jVarTableName = commonConfig.ForeignkeyTables[0];
    let storageData = JSON.parse(localStorage.getItem(jVarTableName));
    let LocalFindData = storageData.find(el => el.pk == jVarLocalFilterString);

    return LocalFindData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };