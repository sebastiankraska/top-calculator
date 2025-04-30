const calc = require('./calc');
const drinkFlavor = require('./calc');

test('adds 1 + 1 to equal 2', () => {
    expect(calc.add(1, 1)).toBe(2);
});

test('subtracts 1 - 1 to equal 0', () => {
    expect(calc.subtract(1, 1)).toBe(0);
});



test('multiply 2 x 3 to equal 6', () => {
    expect(calc.multiply(2, 3)).toBe(6);
});

test('error on division by zero', () => {
    expect(() => {
        calc.divide(1,0);
    }).toThrow("Cannot divide by zero")});