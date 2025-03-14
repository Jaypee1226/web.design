
let display = document.getElementById("display");

function appendValue(value) {
    if (value === "." && display.value.includes(".")) return;
    display.value += value;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}

function toggleSign() {
    if (display.value) {
        display.value = display.value.startsWith("-")
            ? display.value.substring(1)
            : "-" + display.value;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
