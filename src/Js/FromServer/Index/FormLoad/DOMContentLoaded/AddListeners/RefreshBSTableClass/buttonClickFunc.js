let StartFunc = () => {
    const jVarLocalFromLocalStorage = localStorage.getItem("TableData");

    var $table = $('#table');
    $table.bootstrapTable("load", JSON.parse(jVarLocalFromLocalStorage));
};

export { StartFunc };