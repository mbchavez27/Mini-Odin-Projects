let gamePoint = 1;
let startGameButton = document.querySelector("#startGame");
let startScreen = document.querySelector(".startScreen");
let setGamePoint = document.querySelector("#gamePoint");
let gameScreen = document.querySelector(".gameScreen");

startGameButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gamePoint = setGamePoint.value;
  console.log(gamePoint);
  gameScreen.style.display = "flex";
  return gamePoint;
});
