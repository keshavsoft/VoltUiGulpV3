import CommonConfig from '../../../../../../../../Config.json' with { type: 'json' };

const StartFunc = ({ inRowPk }) => {
    let jVarLocalForeignkeyTables = CommonConfig.ForeignkeyTables[0];
    let currentPath = window.location.pathname;
    let parts = currentPath.split("/");

    parts[2] = jVarLocalForeignkeyTables;   // Change Customers to Orders
    parts[parts.length - 1] = "multiTableV1.html";
    let newPath = parts.join("/");

    window.location.href = `${newPath}?inRowPk=${inRowPk}`;
};

export { StartFunc };