//Variables
let isOperator1 = true;
let doneOperation = false;
let isCalcAvailable = false;
let numbers = document.querySelectorAll(".numbers");
let result = document.querySelector("#result");
let operator1 = document.querySelector("#operator1");
let operator2 = document.querySelector("#operator2");
let operatorSymbol = document.querySelector("#operatorSymbol");
let positiveNegative = document.querySelector("#positiveNegative");
const percent = document.querySelector("#percent");
const reset = document.querySelector("#reset");
const getResult = document.querySelector("#getResult");
const deleteNum = document.querySelector("#delete");

//input numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    operands.style.visibility = "visible";
    if (!doneOperation) {
      if (isOperator1) {
        operator1.innerHTML += numbers[i].innerHTML;
        isCalcAvailable = true;
      } else {
        operator2.innerHTML += numbers[i].innerHTML;
      }
    } else {
      resetCalculator();
    }
  });
}

//Make Positive
positiveNegative.addEventListener("click", () => {
  if (!doneOperation) {
    if (isOperator1) {
      operator1.innerHTML *= -1;
    } else {
      operator2.innerHTML *= -1;
    }
  }
});

//reset
reset.addEventListener("click", resetCalculator);

function resetCalculator() {
  operator1.innerHTML = "";
  operator2.innerHTML = "";
  result.innerHTML = "";
  operatorSymbol.innerHTML = "";
  doneOperation = false;
  operands.style.visibility = "hidden";
  isCalcAvailable = false;
  isOperator1 = true;
}
//delete
//
// if (isOperator1) {
//   deleteNum.addEventListener("click", () => {
//     operands.innerHTML = operands.innerHTML.substring(
//       0,
//       operands.innerHTML.length - 1
//     );
//   });
// } else {
// }

//Operations
let operation = "";

const addOperator = document.querySelector("#plus");
const minusOperator = document.querySelector("#minus");
const multiplyOperator = document.querySelector("#multiply");
const divideOperator = document.querySelector("#divide");

addOperator.addEventListener("click", () => {
  if (isCalcAvailable) {
    operatorSymbol.innerHTML = addOperator.innerHTML;
    operation = "add";
    isOperator1 = false;
  }
});
minusOperator.addEventListener("click", () => {
  if (isCalcAvailable) {
    operatorSymbol.innerHTML = minusOperator.innerHTML;
    operation = "minus";
    isOperator1 = false;
  }
});
multiplyOperator.addEventListener("click", () => {
  if (isCalcAvailable) {
    operatorSymbol.innerHTML = multiplyOperator.innerHTML;
    operation = "multiply";
    isOperator1 = false;
  }
});
divideOperator.addEventListener("click", () => {
  if (isCalcAvailable) {
    operatorSymbol.innerHTML = divideOperator.innerHTML;
    operation = "divide";
    isOperator1 = false;
  }
});
//get Result
getResult.addEventListener("click", () => {
  switch (operation) {
    case "add":
      result.innerHTML =
        parseFloat(operator1.innerHTML) + parseFloat(operator2.innerHTML);
      doneOperation = true;
      console.log(isOperator1);
      break;
    case "minus":
      result.innerHTML =
        parseFloat(operator1.innerHTML) - parseFloat(operator2.innerHTML);
      doneOperation = true;
      console.log(isOperator1);
      break;
    case "multiply":
      result.innerHTML =
        parseFloat(operator1.innerHTML) * parseFloat(operator2.innerHTML);
      doneOperation = true;
      console.log(isOperator1);
      break;
    case "divide":
      result.innerHTML =
        parseFloat(operator1.innerHTML) / parseFloat(operator2.innerHTML);
      doneOperation = true;
      console.log(isOperator1);
      break;
  }
});
