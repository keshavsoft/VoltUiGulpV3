const StartFunc = ({ inCurrentTarget }) => {
    const jVarLocalCurrentTarget = inCurrentTarget;
    const jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");
    const jVarLocalInputs = jVarLocalClosestTr.querySelectorAll("input");

    let jVarLocalPostObject = jFLocalPreparePostBody({ 
        inQuerySelectorAll: jVarLocalInputs 
    });

    return jVarLocalPostObject;
};

const jFLocalPreparePostBody = ({ inQuerySelectorAll }) => {
    let jVarLocalReturnObject = {};

    inQuerySelectorAll.forEach(LoopItem => {
        if (LoopItem.type === "number") {
            jVarLocalReturnObject[LoopItem.name] = Number(LoopItem.value);
        } else {
            jVarLocalReturnObject[LoopItem.name] = LoopItem.value;
        }
    });

    // 👉 ADD FK HERE
    jVarLocalReturnObject.FK = getUrlQueryParams({ 
        inGetKey: "inRowPk" 
    });

    return JSON.stringify(jVarLocalReturnObject);
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    return parameters.get(inGetKey);
};

export { StartFunc };
