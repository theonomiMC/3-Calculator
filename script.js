//Variables
const display = document.getElementById('display');
var regtxt = /[+*-/]{2,}/;
var regDec = /\d*\.\d+\./;
var editedDisplay;
var decimalMatch;

function calc(val) {
  decimalMatch = display.value.match(regDec);
  //removes second decimal point from string
  if (regDec.test(display.value)) {
    var last = decimalMatch[0].slice(0, -1);
    display.value = last;
  }
  //check 2 or more oparator in string
  var opMatch = display.value.match(regtxt);
  if (regtxt.test(display.value)) {
    var lastOperator = opMatch[0].slice(-1);
    if (opMatch[0].indexOf("-") == opMatch[0].length - 1) {editedDisplay =
      display.value.replace(opMatch, opMatch[0].slice(-2));
    } else {editedDisplay = display.value.replace(opMatch, lastOperator);
      display.value = editedDisplay;
    }
  }
  // check 0 after clear display
  if (display.value !== '0') {
    display.value += val;
  } else {
    display.value = val;
  }
}

// display clear function
function clean(val) {
  display.value = '0';
}
//get result on equal button click 
function equal() {
  display.value = eval(display.value);
}