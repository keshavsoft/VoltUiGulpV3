let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableClass`);
    jVarLocalRefreshBSTableId.click();

    jFLocalDisplayShowDeleteAlertId();
};

let jFLocalDisplayShowDeleteAlertId = () => {
    let jVarLocalHtmlId = 'DeleteAlertId';
    let jVarLocalDeleteAlertId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDeleteAlertId === null === false) {
        jVarLocalDeleteAlertId.style.display = '';
    };
};

export { StartFunc }