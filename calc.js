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
const mock_input_operator_multiply = '*';
const mock_input_operator_divide = '/';

function operate(a,b,operator) {
    // let internaloperator = '';
    if (operator == 'add') {
        console.log("Compute Add was executed")
        return add(a,b)
    }
    if (operator == 'subtract') {
        return subtract(a,b)
    }
    if (operator == 'multiply') {
        return multiply(a,b)
    }
    if (operator == 'divide') {
        return divide(a,b)
    }
};

let buttonarea = document.querySelector('#button-area');
let resultspan = document.querySelector('#resultspan')

let inputnumbers = [];
let inputoperator = "";
let firstnumber;
let secondnumber = "";


buttonarea.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('digit')) {
        console.log(target.id + " (a digit) was clicked");
        inputnumbers.push(target.id);
        console.log(inputnumbers);
    } else if (target.classList.contains('operator')) {
        if (!firstnumber) {
            firstnumber = Number(inputnumbers.join(''));
            console.log("Firstnumber " + firstnumber + " a " + typeof(firstnumber))
            inputnumbers = [];
        } else if (inputnumbers.length > 0) {
            secondnumber = Number(inputnumbers.join(''));
            console.log("Secondnumber: " + secondnumber + " a " + typeof(firstnumber))
            inputnumbers = [];
            let result = operate(firstnumber, secondnumber, inputoperator);
            resultspan.textContent = result;
            firstnumber = result;
            console.log("RESULT:" + result)
        } else {
        switch(target.id) {
            case 'equals':
                console.log('equals was clicked');
                break;
            case 'clear':
                console.log('clear was clicked');
                break;
        }
    }
    console.log(target.id + " (an operator) was clicked");
    inputoperator = target.id;
    // console.log("inputoperator value is now " + inputoperator);
}
});

// Pseudocode 1 (Eventlistener)
// Listen to all clicks
// find out wich element was clicked (inside event)
//      seperate between sorts of sources: digits vs. operators vs. equals vs. clear

// Pseudocode 2 (Fortsetzung)
//Wenn eine ZAHL gedrückt wird, 
//     füge sie zu einer Zahlenreihe hinzu, 
//       /z.B. wird 1 und dann 2 gedrückt, dann erstelle eine 12.)
// Wenn ein OPERATOR gedrückt wird, 
//     sichere / überschreibe die Operator Variable
//      gucke, ob Input_A schon einen Wert enthält  
//          (das spricht dafür, dass bereits eine Berechnung statt fand
//           oder dafür, dass dies die zweite Eingabezahl ist). 
//          Falls Input_A schon einen Wert enthält, 
//              dann speicher die Zahlenreihe (s.o.) als Input B
//              und starte compute() mit Input A, Input B und dem Operator 
//              zeige das Ergebnis in HTML an
//              speichere das Ergebnis als Input_A
//              lösche die Operator-Variable (nötig?)
//              lösche Input_B (wirklich nötig? Wird doch ohnehin überschrieben, oder? )
//              (optional setze die "gedrückten" Buttons zurück (CSS Klassen))
//          Falls nein 
//              (falls Input A leer ist 
//                  (das ist der Fall, 
//                  wenn noch gar keine Berechnung lief, 
//                  also die Seite neugeladen wurde 
//                  oder clear gedrüclt wurde)
//              dann speicher die zahlenreihe als Input A. 
// Wenn RESULT gedrückt wird,
//       prüfe ob diese Werte gesetzt wurden: Input A und Operator
            // Wenn Ja, mache die Zahlenreihe (s.o.) zu Input B
            // und starte die Berechnung (compute)
            // tue hier ähnliches wie bei OPERATOR oben, sprich: mache das Ergebnis zu Input A, setze Operator-Var und InputB-Var zurück
// Wenn CLEAR gedrückt wird,
//       setze diese Werte zurücK: Input A, Input B, Operator

// Compute sollte mehrere Dinge tun: Ergebnis anzeigen + Ergebnis als InputA abspeichern + Operator-Var und InputB-Var zurücksetzen, usw. .... so dass compute() von Klicks auf OPERATORS oder auf RESULT ausgelöst werden kann.

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    mock_input_a,
    mock_input_b,
    mock_input_operator_add,
    operate,
    mock_input_operator_subtract,
    mock_input_operator_multiply,
    mock_input_operator_divide
};