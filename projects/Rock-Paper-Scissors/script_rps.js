//To set Game Point and Start the Game
let gamePoint;
let startGameButton = document.querySelector("#startGame");
let startScreen = document.querySelector(".startScreen");
let setGamePoint = document.querySelector("#gamePoint");
let gameScreen = document.querySelector(".gameScreen");

//Starts the game by changing game screens
startGameButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
  gameLoop();
});

//Sets the game points when input change value
setGamePoint.addEventListener("change", () => {
  gamePoint = parseInt(setGamePoint.value);
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

//Initialize temporary values
playerPointCounter.innerHTML = `Player Point: ${playerPoint}`;
cpuPointCounter.innerHTML = `CPU Point: ${cpuPoint}`;

//Game Loop
let statusText = document.querySelector(".statusField");
let isPlayerTurn = true;

//game Loop for the whole game

let playerMove;
let cpuMove;

const playerMoves = {
  rock: document.querySelector("#pRock"),
  paper: document.querySelector("#pPaper"),
  scissors: document.querySelector("#pScissors"),
};

playerMoves.rock.addEventListener("click", () => {
  if (isPlayerTurn) {
    playerMove = "ROCK";
    playerMoves.rock.classList.add("moveRight");
    isPlayerTurn = false;
    changeGameStatus(isPlayerTurn);
  }
});
playerMoves.paper.addEventListener("click", () => {
  if (isPlayerTurn) {
    playerMove = "PAPER";
    playerMoves.paper.classList.add("moveRight");
    isPlayerTurn = false;
    changeGameStatus(isPlayerTurn);
  }
});
playerMoves.scissors.addEventListener("click", () => {
  if (isPlayerTurn) {
    playerMove = "SCISSORS";
    playerMoves.scissors.classList.add("moveRight");
    isPlayerTurn = false;
    changeGameStatus(isPlayerTurn);
  }
});

const cpuMoves = {
  rock: document.querySelector("#cpuRock"),
  paper: document.querySelector("#cpuPaper"),
  scissors: document.querySelector("#cpuScissors"),
};
if (!isPLayerTurn) {
}
