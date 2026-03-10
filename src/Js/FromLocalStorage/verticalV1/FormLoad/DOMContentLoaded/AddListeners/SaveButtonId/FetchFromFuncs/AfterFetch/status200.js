import CommonConfig from '../../../../../../../../Config.json' with { type: 'json' };

const StartFunc = ({ inRowPk }) => {
    const jVarLocalCommonVersion = CommonConfig.TableName.split("/")[1]
    let jVarLocalForeignkeyTables = CommonConfig.ForeignkeyTables[0];
    window.location.href = `/${jVarLocalCommonVersion}/${jVarLocalForeignkeyTables}/pages/FromLocalStorage/multiTableV2.html?inRowPk=${inRowPk}`;
};

export { StartFunc };
