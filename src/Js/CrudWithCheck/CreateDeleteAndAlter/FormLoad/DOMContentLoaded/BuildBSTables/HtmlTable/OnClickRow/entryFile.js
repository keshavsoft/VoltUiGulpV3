import { StartFunc as FetchDelete } from "./FetchDelete/entry.js";
import { StartFunc as StartFuncNav } from "./NavAlter/entryFile.js";
import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";

const jVarCommonFieldName = "KS-Delete";
const jVarCommonFieldAlterName = "KS-Alter";

const StartFunc = async (row, $element, field) => {
    if (field === jVarCommonFieldName) {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            confirmButtonText: "Yes, delete it!",
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            if ("pk" in row) {
                await FetchDelete({ inRowPk: row.pk });
                // Swal.fire({
                //     title: "Deleted!",
                //     text: `The record ${row.pk} has been deleted.`,
                //     icon: "success",
                //     confirmButtonColor: "#3085d6",
                //     confirmButtonText: "OK"
                // });
            }
        }
    }

    if (field === jVarCommonFieldAlterName) {
        const myModal = new bootstrap.Modal('#AlterModal', {
            backdrop: 'static',   // prevent close on outside click
            keyboard: false       // prevent close on ESC
        });

        myModal.show();
        StartFuncRowDataFromGet({ inGetKey: row.pk });

        // StartFuncNav({ inRowpk: row.pk });
    };
};

export { StartFunc };
