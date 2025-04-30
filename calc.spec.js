const add = require('./calc');

test('adds 1 + 1 to equal 2', () => {
    expect(add(1, 1)).toBe(2);
});

test('subtracts 1 - 1 to equal 0', () => {
    expect(subtract(1, 1).toBe(0));
});
