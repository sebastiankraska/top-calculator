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