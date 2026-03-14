const StartFunc = ({ inResponseAsJson }) => {
    populateFormFromJson({ inData: inResponseAsJson });

    populateGridTable({ inData: inResponseAsJson.ForeignkeyTableData });
};

const populateFormFromJson = ({ inData }) => {
    Object.entries(inData).forEach(([key, value]) => {
        const el = document.querySelector(`[name="${key}"]`);

        if (el) el.value = value;
    });
};

const populateGridTable = ({ inData }) => {
    var $table = $('#table');

    $table.bootstrapTable("load", inData);
};

export { StartFunc };
