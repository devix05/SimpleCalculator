window.onload = () => {
    const display = document.getElementById("display");

    document.querySelectorAll("button[data-val]").forEach(btn => {
        btn.addEventListener("click", () => {
            display.value += btn.dataset.val;
        });
    });

    document.getElementById("clear").addEventListener("click", () => {
        display.value = "";
    });

    document.getElementById("equal").addEventListener("click", () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    });

    document.addEventListener("keydown", (e) => {
        const key = e.key;

        if (key >= "0" && key <= "9") {
            display.value += key;
        } else if (["+", "-", "*", "/"].includes(key)) {
            display.value += key;
        } else if (key === "Enter") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (key === "Backspace") {
            display.value = display.value.slice(0, -1);
        } else if (key === "Escape") {
            display.value = "";
        } else if (key === ".") {
            display.value += ".";
        }
    });
};
