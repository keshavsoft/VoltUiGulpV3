let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    // Select all inputs with "required" attribute
    let requiredInputs = jVarLocalForm.querySelectorAll("input[required], select[required], textarea[required]");

    let isValid = true;

    for (let input of requiredInputs) {
        if (!input.value.trim()) {
            input.classList.add("is-invalid");   // Bootstrap invalid class
            input.classList.remove("is-valid");
            isValid = false;
        } else {
            input.classList.add("is-valid");     // Bootstrap valid class
            input.classList.remove("is-invalid");
        }
    }

    return isValid;  // true = all good, false = some empty
};

export { StartFunc };
