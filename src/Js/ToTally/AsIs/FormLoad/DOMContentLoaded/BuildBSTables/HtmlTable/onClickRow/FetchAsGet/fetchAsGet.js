import UrlJson from "./url.json" with { type: "json" };
// import commonConfigJson from "../../../../../Config.json" with { type: "json" };
import commonConfigJson from '../../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async ({ inRowPk }) => {
    let LocalroutePath = UrlJson.PostendPoint;
    const LocalStartRoute = commonConfigJson.StartApi;
    const TableName = commonConfigJson.OnlyTableName;

    // let jVarLocalFetchUrl = `${jVarTableName}/${LocalroutePath}`;
    let response = await fetch(`/${LocalStartRoute}/${TableName}/${LocalroutePath}/${inRowPk}`);

    return await response;
};

export { StartFunc };

