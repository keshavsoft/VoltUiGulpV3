let StartFunc = ({ inData }) => {
    // console.log("inData", Array.isArray(inData), inData, inData[0], ConfigJson);

    var $table = $('#table');
    $table.bootstrapTable("load", inData);
};

export { StartFunc };