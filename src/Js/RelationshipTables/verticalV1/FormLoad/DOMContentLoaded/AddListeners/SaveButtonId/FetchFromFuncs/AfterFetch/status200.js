import CommonConfig from '../../../../../../../../Config.json' with { type: 'json' };

const StartFunc = ({ inRowPk }) => {
    const jVarLocalCommonVersion = CommonConfig.TableName.split("/")[2].replace("S", "")
    let jVarLocalForeignkeyTables = CommonConfig.ForeignkeyTables[0];
    window.location.href = `/${jVarLocalCommonVersion}/${jVarLocalForeignkeyTables}/protected/pages/RelationshipTables/multiTableV1.html?inRowPk=${inRowPk}`;
};

export { StartFunc };
