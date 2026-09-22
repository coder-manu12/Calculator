const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        // Convert percentage into decimal
        expression = expression.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");

        // Calculate the expression
        display.value = Function('"use strict"; return (' + expression + ')')();
    } catch (error) {
        display.value = "Error";
    }
}
