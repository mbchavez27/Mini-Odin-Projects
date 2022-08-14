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
let decimal = document.querySelector("#decimal");
const percent = document.querySelector("#percent");
const reset = document.querySelector("#reset");
const getResult = document.querySelector("#getResult");
const deleteNum = document.querySelector("#delete");
let operation = "";
const addOperator = document.querySelector("#plus");
const minusOperator = document.querySelector("#minus");
const multiplyOperator = document.querySelector("#multiply");
const divideOperator = document.querySelector("#divide");

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

//Input Decimal
decimal.addEventListener("click", () => {
  if (!doneOperation) {
    if (isOperator1) {
      if (!operator1.innerHTML.includes(decimal.innerHTML)) {
        operator1.innerHTML += decimal.innerHTML;
      }
    } else {
      if (!operator2.innerHTML.includes(decimal.innerHTML)) {
        operator2.innerHTML += decimal.innerHTML;
      }
    }
  }
});

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
deleteNum.addEventListener("click", () => {
  if (isOperator1) {
    operator1.innerHTML = operator1.innerHTML.substring(
      0,
      operator1.innerHTML.length - 1
    );
  } else {
    if (operator2.innerHTML.length <= 0) {
      operation = "";
      operatorSymbol.innerHTML = "";
      isOperator1 = true;
    } else {
      operator2.innerHTML = operator2.innerHTML.substring(
        0,
        operator2.innerHTML.length - 1
      );
    }
  }
});

//Operations
addOperator.addEventListener("click", () => {
  if (isCalcAvailable) {
    if (!doneOperation) {
      operatorSymbol.innerHTML = addOperator.innerHTML;
      operation = "add";
      isOperator1 = false;
    } else {
      operator1.innerHTML = result.innerHTML;
      operator2.innerHTML = "";
      result.innerHTML = "";
      doneOperation = false;
    }
  }
});
minusOperator.addEventListener("click", () => {
  if (isCalcAvailable) {
    if (!doneOperation) {
      operatorSymbol.innerHTML = minusOperator.innerHTML;
      operation = "minus";
      isOperator1 = false;
    } else {
      operator1.innerHTML = result.innerHTML;
      operator2.innerHTML = "";
      result.innerHTML = "";
      doneOperation = false;
    }
  }
});
multiplyOperator.addEventListener("click", () => {
  if (isCalcAvailable) {
    if (!doneOperation) {
      operatorSymbol.innerHTML = multiplyOperator.innerHTML;
      operation = "multiply";
      isOperator1 = false;
    } else {
      operator1.innerHTML = result.innerHTML;
      operator2.innerHTML = "";
      result.innerHTML = "";
      doneOperation = false;
    }
  }
});
divideOperator.addEventListener("click", () => {
  if (isCalcAvailable) {
    if (!doneOperation) {
      operatorSymbol.innerHTML = divideOperator.innerHTML;
      operation = "divide";
      isOperator1 = false;
    } else {
      operator1.innerHTML = result.innerHTML;
      operator2.innerHTML = "";
      result.innerHTML = "";
      doneOperation = false;
    }
  }
});
//get Result
getResult.addEventListener("click", () => {
  if (operator2.innerHTML.length > 0) {
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
  }
});
