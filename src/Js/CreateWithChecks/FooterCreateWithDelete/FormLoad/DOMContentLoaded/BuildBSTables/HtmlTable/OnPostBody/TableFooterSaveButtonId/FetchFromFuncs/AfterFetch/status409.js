let StartFunc = ({ inResponse }) => {
    Swal.fire({
        text: `${inResponse}`,
        title: "check",
        icon: "error",
        confirmButtonColor: "#1bb450ff",
        confirmButtonText: "Ok"
    }).then((result) => {
        if (result.isConfirmed) {

            // Focus & select the input
            let $autoFocusInput = $("#table tfoot input[autofocus]");
            if ($autoFocusInput.length > 0) {
                $autoFocusInput.first().trigger("focus").select();
            }

            // ✅ STOP further execution
            return false;
        }
    });

    // ✅ Also stop code flow here
    return false;
};

export { StartFunc };
