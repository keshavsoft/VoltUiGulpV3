let StartFunc = ({ inJsonData }) => {
    let jVarLocalHtmlDLEId = document.getElementById('HtmlDLId-AccountName');

    inJsonData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.AccountName;
        jVarLocalHtmlDLEId.appendChild(option);
    });
};

export { StartFunc };