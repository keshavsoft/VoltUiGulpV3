const StartFunc = ({ inResponseAsJson, inTableName }) => {
    

    let $autoFocusInput = $("#FormId").find("input[autofocus], select[autofocus], textarea[autofocus]");
    let jVarLocalDataLists = document.querySelectorAll("datalist");
    // console.log("inResponseAsJson",inResponseAsJson,inTableName,jVarLocalDataLists);

    jVarLocalDataLists.forEach(item => {
        
        LocalFunc({ inTableName: item.id.replace("HtmlDLId-", ""), inResponseAsJson });
    });

    if ($autoFocusInput.length > 0) {
        $autoFocusInput[0].focus();
    };
};

const LocalFunc = ({ inTableName, inResponseAsJson }) => {
    const carArray = inResponseAsJson;
    const jVarLocalParsedArray = inResponseAsJson
    if (jVarLocalParsedArray === null) {
        return
    }
    const jVarLocalHtmlDataList = document.getElementById(`HtmlDLId-${inTableName}`);
    const jVarLocalField = jVarLocalHtmlDataList.dataset.field;

    jVarLocalParsedArray.forEach(function (item) {
        const option = document.createElement('option');
        option.value = item[jVarLocalField];
        jVarLocalHtmlDataList.appendChild(option);
    });
};

export { StartFunc };
