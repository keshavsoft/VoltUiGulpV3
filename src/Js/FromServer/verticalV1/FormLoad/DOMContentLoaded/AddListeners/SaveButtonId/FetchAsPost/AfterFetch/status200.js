import CommonConfig from '../../../../../../../../Config.json' with { type: 'json' };

const StartFunc = ({ inRowPk }) => {

    const fileName = "multiTableV1.html";
    let jVarLocalForeignkeyTables = CommonConfig.ForeignkeyTables[0];

    let jVarLocalPathParts = window.location.pathname.split("/");

    jVarLocalPathParts[2] = jVarLocalForeignkeyTables;
    jVarLocalPathParts[jVarLocalPathParts.length - 1] = fileName;

    window.location.href = `${jVarLocalPathParts.join("/")}?inRowPk=${inRowPk}`;
};


export { StartFunc };
