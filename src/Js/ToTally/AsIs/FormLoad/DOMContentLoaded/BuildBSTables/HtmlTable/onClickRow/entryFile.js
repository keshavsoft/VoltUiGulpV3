// import { StartFunc as FetchDelete } from "./FetchDelete/entry.js";
import { StartFunc as FetchAsGet } from "./FetchAsGet/entryFile.js";

const StartFunc = async (row, $element, field) => {
    if (field !== "KS-Delete") return;

    const isConfirmed = await confirmFetch();

    if (!isConfirmed) return;

    if ("pk" in row) {
        await FetchAsGet({ inRowPk: row.pk });
    }
};

const confirmFetch = async () => {
    const response = await Swal.fire({
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

    return response.isConfirmed;
};

export { StartFunc };