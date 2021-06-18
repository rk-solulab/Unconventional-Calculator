let currentResult = 0;
let userHistoryLog = [];
// Operators in JS
// Addition : +
// Substraction : -
// Division : /
// Get Remainder : %
// Exponentation : **

// Writing Function
function getUserInput() {
  // getting userInput from Vendor.js
  return parseInt(userInput.value);
}

function getUserHistory(operation, num1, num2, result) {
  const logEntry = {
    operation: operation,
    num1: num1,
    num2: num2,
    result: result,
  };
  userHistoryLog.push(logEntry);
  console.log(userHistoryLog);
}

/* VERSION I

function add(){
    const enteredNumber = getUserInput()
    let calculationDescription = `${currentResult} + ${enteredNumber}`;
    const number1 = currentResult   
    currentResult = currentResult + enteredNumber;
    // Convert sting to number without pasreInt
    // currentResult = currentResult + +userInput.value;
    // Calling a function from vendor.js and passing parameters from app.js
    outputResult(currentResult, calculationDescription);
    getUserHistory("Addition", number1, enteredNumber, currentResult);
}

function substract(){
    const enteredNumber = getUserInput()
    let calculationDescription = `${currentResult} - ${enteredNumber}`;   
    const number1 = currentResult
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calculationDescription);
    getUserHistory("Substraction", number1, enteredNumber, currentResult);
}

function multiply(){
    const enteredNumber = getUserInput()
    let calculationDescription = `${currentResult} * ${enteredNumber}`;   
    const number1 = currentResult
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calculationDescription);
    getUserHistory("Multiplication", number1, enteredNumber, currentResult);
}

function divide(){
    const enteredNumber = getUserInput()
    let calculationDescription = `${currentResult} / ${enteredNumber}`;   
    const number1 = currentResult
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calculationDescription);
    getUserHistory("Division", number1, enteredNumber, currentResult);
}

*/

/* VERSION II */

function calculate(operation) {
  const enteredNumber = getUserInput();

  if (
    operation !== "ADD" &&
    operation !== "SUBTRACTION" &&
    operation !== "MULTIPLICATION" &&
    operation !== "DIVISION" ||
    !enteredNumber
  ) {
    return;
  }

  //if enteredNumber is non-zero, enteredNumber inside if statement would be true 

  const number1 = currentResult;
  let mathOperator;

  if (operation === "ADD") {
    currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (operation === "SUBTRACTION") {
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  } else if (operation === "MULTIPLICATION") {
    currentResult = currentResult * enteredNumber;
    mathOperator = "*";
  } else if (operation === "DIVISION") {
    currentResult = currentResult / enteredNumber;
    mathOperator = "/";
  }

  let calculationDescription = `${number1} ${mathOperator} ${enteredNumber}`;
  outputResult(currentResult, calculationDescription);
  getUserHistory(operation, number1, enteredNumber, currentResult);
}

function add() {
  calculate("ADD");
}

function substract() {
  calculate("SUBTRACTION");
}

function multiply() {
  calculate("MULTIPLICATION");
}

function divide() {
  calculate("DIVISION");
}

//Calling from vendor.js
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
