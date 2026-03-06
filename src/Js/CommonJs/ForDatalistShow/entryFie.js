import { StartFunc as StartFuncFillDataList } from "./FillDataList/entryFile.js";

const StartFunc = () => {
    const LocalData = localStorage.getItem("AccountNames");
    if (!LocalData) return;

    StartFuncFillDataList({ inJsonData: JSON.parse(LocalData) })
};

StartFunc()
