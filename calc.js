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
const mock_input_b = 2;
const mock_input_operator_add = '+';
const mock_input_operator_subtract = '-';

function operate(a,b,operator) {
    // let internaloperator = '';
    if (operator == '+') {
        return add(a,b)
    }
    if (operator == '-') {
        return subtract(a,b)
    }

};

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    mock_input_a,
    mock_input_b,
    mock_input_operator_add,
    operate,
    mock_input_operator_subtract
};