//To set Game Point
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

let gameStatus = document.querySelector("#gameStatus");

function changeGameStatus(isPlayerTurn) {
  //If isPLayerTurn is true then game status will be players turn else be cpu's turn
  if (isPlayerTurn) return (gameStatus.innerHTML = "Player's Turn");
  else return (gameStatus.innerHTML = "CPU's Turn");
}

const move = (moveType) => {
  moveType.moveReference.classList.add(moveType.moveSide);
  return moveType.moveName;
};

const Rock = {
  moveReference: document.querySelector("#pRock"),
  moveName: "ROCK",
  moveSide: "moveRight",
};

document.querySelector("#pRock").addEventListener("click", move(e, Rock));
