import CommonTableName from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = ({ inResponseAsJson }) => {
    const LocalOnlyTableName = CommonTableName.OnlyTableName;

    localStorage.setItem(LocalOnlyTableName, JSON.stringify(inResponseAsJson));

    LocalFuncRemoveClass({ inHtmlId: "TopBarNotificationId", inClassName: "unread" });
};

const LocalFuncRemoveClass = ({ inHtmlId, inClassName }) => {
    let jVarLocalinHtmlId = document.getElementById('inHtmlId');
    jVarLocalinHtmlId.classList.remove(inClassName);
};

export { StartFunc };