function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

const mock_input_a = 8;

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    mock_input_a
};