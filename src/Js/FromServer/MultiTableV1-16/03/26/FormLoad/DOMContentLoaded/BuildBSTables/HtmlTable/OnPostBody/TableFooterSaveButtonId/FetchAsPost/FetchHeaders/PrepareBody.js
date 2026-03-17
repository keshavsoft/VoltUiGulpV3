import commonConfigJson from "../../../../../../../../config.json" with { type: "json" };

const StartFunc = ({ inCurrentTarget }) => {
    const jVarLocalCurrentTarget = inCurrentTarget;
    const jVarLocalClosestForm = jVarLocalCurrentTarget.closest("tr");

    const jVarLocalInputs = jVarLocalClosestForm.querySelectorAll("input,textarea,select");

    let jVarLocalPostObject = jFLocalPreparePostBody({ inQuerySelectorAll: jVarLocalInputs });

    const parentValue =
        new URLSearchParams(window.location.search)
            .get(commonConfigJson.Parent.UrlParam);

    jVarLocalPostObject[commonConfigJson.Parent.BodyKey] = parentValue;

    return JSON.stringify(jVarLocalPostObject);
};

const jFLocalPreparePostBody = ({ inQuerySelectorAll }) => {
    let jVarLocalReturnObject = {};

    inQuerySelectorAll.forEach(LoopItem => {
        if (LoopItem.type === "number") {
            jVarLocalReturnObject[LoopItem.name] = parseFloat(LoopItem.value, 2);
        } else {
            jVarLocalReturnObject[LoopItem.name] = LoopItem.value;
        }

    });

    return jVarLocalReturnObject;
};

export { StartFunc }