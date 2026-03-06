let StartFunc = ({ inResponseAsJson, inTableName }) => {
    localStorage.setItem(inTableName, JSON.stringify(inResponseAsJson));
    LocalFunc({ inTableName });
};

const LocalFunc = ({ inTableName }) => {
    const carArray = localStorage.getItem(inTableName);
    const jVarLocalParsedArray = JSON.parse(carArray);
    const jVarLocalHtmlDataList = document.getElementById('cars');
    console.log("aaaaaaaa : ", jVarLocalParsedArray, jVarLocalHtmlDataList, jVarLocalHtmlDataList.dataset);

    jVarLocalParsedArray.forEach(function (item) {
        const option = document.createElement('option');
        option.value = item;
        jVarLocalHtmlDataList.appendChild(option);
    });

};

export { StartFunc };