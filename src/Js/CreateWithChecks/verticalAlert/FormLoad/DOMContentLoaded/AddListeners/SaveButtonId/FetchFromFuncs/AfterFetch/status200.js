const StartFunc = ({ inRowPk }) => {
    LocalFuncForAlert({ inRowPk })
};

const LocalFuncForAlert = ({ inRowPk }) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your record has been saved",
        showConfirmButton: false,
        timer: 1500
    });
};



export { StartFunc };
