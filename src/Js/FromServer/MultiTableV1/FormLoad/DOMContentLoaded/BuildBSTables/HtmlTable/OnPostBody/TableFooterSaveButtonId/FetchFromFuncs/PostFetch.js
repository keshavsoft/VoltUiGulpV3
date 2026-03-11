import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import ConfigJson from "../../../../../../../../../Config.json" with { type: "json" };

const StartFunc = async ({ inCurrentTarget }) => {
    const tableRoute = ConfigJson.TableName.split("/")[2];
    const fetchHeaders = JSON.parse(StartFuncFetchHeaders({ inCurrentTarget }));

    let storageData = JSON.parse(localStorage.getItem(tableRoute));
    const response = {};

    // If data already exists in localStorage
    if (Array.isArray(storageData)) {
        const pkArray = storageData
            .map(item => Number(item.pk))
            .filter(pk => !isNaN(pk));

        const maxPk = Math.max(...pkArray, 0) + 1;

        const newRow = { ...fetchHeaders, pk: maxPk };
        storageData.push(newRow);

        localStorage.setItem(tableRoute, JSON.stringify(storageData));

        response.status = 200;
        response.RowPk = maxPk;

    } else {
        // First insert
        const newRow = { ...fetchHeaders, pk: 1 };
        const newArray = [newRow];

        console.log("First Insert:", newRow, newArray);

        localStorage.setItem(tableRoute, JSON.stringify(newArray));

        response.status = 200;
        response.RowPk = 1;
    }

    return response;
};

export { StartFunc };