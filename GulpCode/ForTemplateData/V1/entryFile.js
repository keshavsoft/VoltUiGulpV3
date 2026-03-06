const SideBarItems = require("../../../SidebarItems/SideBar.json");

// const SideBarItems = require("../../../SidebarItems/SideBar.json");
const SideBarForCalender = require("../../../SidebarItems/forCalender.json");
// const CommonSideBarsImportJson = require("../../../SideBars/import.json");

const CommonSideBarsImportJson = require("../../../SidebarItems/forImport.json");

const SideBarItemsForShowAll = require("../../../SidebarItems/forShowAll.json");
const SideBarForRead = require("../../../SidebarItems/forRead.json")
const SideBarItemsforCreate = require("../../../SidebarItems/forCreate.json");
const SideBarItemsforDelete = require("../../../SidebarItems/forDelete.json");
const SideBarItemsForGroupBy = require("../../../SidebarItems/forGroupBy.json")
const SideBarItemsforAlter = require("../../../SidebarItems/forAlter.json")
const SideBarItemsforDownload = require("../../../SidebarItems/forDownload.json")
const SideBarItemsforCards = require("../../../SidebarItems/forCards.json")
const SideBarItemsforCharts = require("../../../SidebarItems/forCharts.json")
const SideBarItemsforSubObjShow = require("../../../SidebarItems/forSubObjShow.json")
const SideBarItemsforSubArrayShow = require("../../../SidebarItems/forSubArrayShow.json")
const SideBarItemsforCreateWithChecks = require("../../../SidebarItems/forCreateWithChecks.json");
const SideBarItemsForShowAllSortDesc = require("../../../SidebarItems/forShowAllSortDesc.json");
const SideBarItemsForCrud = require("../../../SidebarItems/forCrud.json");
const SideBarItemsForCrudWithCheck = require("../../../SidebarItems/forCrudWithCheck.json");
const SideBarItemsForMultiTable = require("../../../SidebarItems/forMultiTable.json");
const SideBarItemsforRelationshipTables = require("../../../SidebarItems/forRelationshipTables.json");

const StartFunc = ({ inCommonColumns }) => {
    var templateData = {
        TableName: inCommonColumns.tableName,
        firstName: 'KeshavSoft',
        Array: [{ name: "create" }, { name: "show" }, { name: "KeshavSoft" }],
        SideBarItems: SideBarItems,
        SideBarForCalender: SideBarForCalender,
        TableColumns: inCommonColumns.columns,
        columns: inCommonColumns.columns,
        DataTableOptions: inCommonColumns.DataTableOptions,
        SideBarForImport: CommonSideBarsImportJson,
        pathFromGulp: "../..",
        SideBarItemsForShowAll: SideBarItemsForShowAll,
        SideBarForRead: SideBarForRead,
        SideBarItemsforCreate: SideBarItemsforCreate,
        SideBarItemsforDelete: SideBarItemsforDelete,
        SideBarItemsforAlter: SideBarItemsforAlter,
        SideBarItemsforDownload: SideBarItemsforDownload,
        SideBarItemsforCards: SideBarItemsforCards,
        SideBarItemsforCharts: SideBarItemsforCharts,
        SideBarItemsForGroupBy: SideBarItemsForGroupBy,
        SideBarItemsforSubObjShow: SideBarItemsforSubObjShow,
        SideBarItemsforSubArrayShow: SideBarItemsforSubArrayShow,
        SideBarItemsforCreateWithChecks: SideBarItemsforCreateWithChecks,
        SideBarItemsForShowAllSortDesc: SideBarItemsForShowAllSortDesc,
        SideBarItemsForCrud: SideBarItemsForCrud,
        SideBarItemsForCrudWithCheck: SideBarItemsForCrudWithCheck,
        SideBarItemsForMultiTable: SideBarItemsForMultiTable,
        DependantTables: inCommonColumns.DependantTables,
        SideBarItemsforRelationshipTables: SideBarItemsforRelationshipTables

    };

    return templateData;
};

module.exports = { StartFunc };