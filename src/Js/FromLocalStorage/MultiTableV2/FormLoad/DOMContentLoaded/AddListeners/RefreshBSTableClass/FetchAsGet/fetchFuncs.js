import CommonTableName from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "inRowPk" });
    const tableRoute = CommonTableName.TableName.split("/")[2];
    let storageData = JSON.parse(localStorage.getItem(tableRoute));
    if (storageData) {
    let LocalFilterData = storageData.filter(el => el.FK == jVarLocalFilterString)
    return await LocalFilterData;
        
    }

};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

