import CommonTableName from '../../../../../../Config.json' with {type: 'json'};
const CommonOnlyTableName = CommonTableName.OnlyTableName;

let StartFunc = () => {
    const jVarLocalFromLocalStorage = LocalFuncFromLocalStorage();

    var $table = $('#table');
    $table.bootstrapTable("load", jVarLocalFromLocalStorage);
};

const LocalFuncFromLocalStorage = () => {
    const jVarLocalFromLocalStorage = localStorage.getItem(CommonOnlyTableName);

    return JSON.parse(jVarLocalFromLocalStorage);
};

export { StartFunc };