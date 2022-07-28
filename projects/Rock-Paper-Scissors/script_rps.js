let gamePoint = 1;
let startGameButton = document.querySelector("#startGame");
let startScreen = document.querySelector(".startScreen");
let setGamePoint = document.querySelector("#gamePoint");

startGameButton.addEventListener("click", () => {
  startScreen.style.visibility = "hidden";
  gamePoint = setGamePoint.value;
  console.log(gamePoint);
  return gamePoint;
});
