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
};

function drinkFlavor(flavor) {
    if (flavor === 'octopus') {
      throw new DisgustingFlavorError('yuck, octopus flavor');
    }
    // Do some other stuff
  };

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    drinkFlavor
};