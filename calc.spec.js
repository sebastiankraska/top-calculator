const calc = require('./calc');

test('adds 1 + 1 to equal 2', () => {
    expect(calc.add(1, 1)).toBe(2);
});

test('adds 21 + 3 to equal 24', () => {
    expect(calc.add(21, 3)).toBe(24);
});


test('subtracts 1 - 1 to equal 0', () => {
    expect(calc.subtract(1, 1)).toBe(0);
});

test('subtracts 3 - 10 to equal -7', () => {
    expect(calc.subtract(3, 10)).toBe(-7);
});

test('multiply 2 x 3 to equal 6', () => {
    expect(calc.multiply(2, 3)).toBe(6);
});

test('9 times 9 equals 81', () => {
    expect(calc.multiply(9,9)).toBe(81);
});

// see also: https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462
test('error on division by zero', () => {
    expect(() => {
        calc.divide(1,0);
    }).toThrow("Cannot divide by zero")});

test('divide 10 / 2 to equal 5', () => {
    expect(calc.divide(10, 2)).toBe(5);
});

test('check if mocking variable input_a is assigned 8', () => {
    expect(calc.mock_input_a).toBe(8);
});

test('check if mocking variable input_b is assigned 2', () => {
    expect(calc.mock_input_b).toBe(2);
});

test('check if mocking variable mock_input_operator_add is equal "+"', () => {
    expect(calc.mock_input_operator_add).toBe('+');
});

test('operate with add: check if operate functions returns 10 when given mock operators', () => {
    expect(calc.operate(calc.mock_input_a, calc.mock_input_b, calc.mock_input_operator_add)).toBe(10);
});

test('operate with subtract: check if operate functions returns 6 when given mock operators', () => {
    expect(calc.operate(calc.mock_input_a, calc.mock_input_b, calc.mock_input_operator_subtract)).toBe(6);
});

test('operate with multiply: check if operate functions returns 16 when given mock operators', () => {
    expect(calc.operate(calc.mock_input_a, calc.mock_input_b, calc.mock_input_operator_multiply)).toBe(6);
});