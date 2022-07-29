//To set Game Point and Start the Game
let gamePoint;
let startGameButton = document.querySelector("#startGame");
let startScreen = document.querySelector(".startScreen");
let setGamePoint = document.querySelector("#gamePoint");
let gameScreen = document.querySelector(".gameScreen");

startGameButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
});

setGamePoint.addEventListener("change", () => {
  gamePoint = parseInt(setGamePoint.value);
  console.log(gamePoint);
  gamePointCounter.innerHTML = `Game Point: ${gamePoint}`;
});

//Change Game Status
let gameStatus = document.querySelector("#gameStatus");

function changeGameStatus(isPlayerTurn) {
  //If isPLayerTurn is true then game status will be players turn else be cpu's turn
  if (isPlayerTurn) return (gameStatus.innerHTML = "Player's Turn");
  else return (gameStatus.innerHTML = "CPU's Turn");
}

//Game Score Counter
let playerPoint = 0,
  cpuPoint = 0;
let gamePointCounter = document.querySelector("#gamePointCounter");
let playerPointCounter = document.querySelector("#playerPointCounter");
let cpuPointCounter = document.querySelector("#cpuPointCounter");

playerPointCounter.innerHTML = `Player Point: ${playerPoint}`;
cpuPointCounter.innerHTML = `CPU Point: ${cpuPoint}`;

gamePointCounter.addEventListener("click", () => {
  gameLoop();
});
//Game Loop
function gameLoop() {
  playerPoint++;
  console.log(playerPoint);
}
