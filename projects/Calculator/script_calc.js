//input numbers
let numbers = document.querySelectorAll(".numbers");
let result = document.querySelector("#result");
let operands = document.querySelector("#operands");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    operands.style.visibility = "visible";
    operands.innerHTML += numbers[i].innerHTML;
  });
}

//reset
const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  operands.innerHTML = "";
  result.innerHTML = "";
  operands.style.visibility = "hidden";
});

//delete
const deleteNum = document.querySelector("#delete");

deleteNum.addEventListener("click", () => {
  operands.innerHTML = operands.innerHTML.substring(
    0,
    operands.innerHTML.length - 1
  );
});
