let StartFunc = () => {
    AttachEnterCalcListener();
};

const AttachEnterCalcListener = () => {
    document.addEventListener("keyup", function (e) {
        
        // Only real user Enter key
        if (e.key !== "Enter" || !e.isTrusted) return;

        const input = e.target;

        // Only for calculation-enabled inputs
        if (!(input instanceof HTMLInputElement)) return;
        if (!input.dataset.enterCal) return;

        e.preventDefault();

        const row = input.closest("tr");
        if (!row) return;

        const formula = input.dataset.enterCal;

        let expression = formula.replace(/[A-Za-z]+/g, (field) => {
            const el = row.querySelector(`[name="${field}"]`);
            return el && el.value !== "" ? Number(el.value) : 0;
        });

        try {
            const result = Function(`"use strict"; return (${expression})`)();
            input.value = result.toFixed(2);
            input.dispatchEvent(new Event("input", { bubbles: true }));
        } catch (err) {
            console.error("Calculation error:", err, expression);
        }
    });
};


export { StartFunc };
