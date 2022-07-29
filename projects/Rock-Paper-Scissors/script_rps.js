//To set Game Point and Start the Game
let gamePoint = 1;
let startGameButton = document.querySelector("#startGame");
let startScreen = document.querySelector(".startScreen");
let setGamePoint = document.querySelector("#gamePoint");
let gameScreen = document.querySelector(".gameScreen");

//Starts the game by changing game screens
startGameButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
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
gamePointCounter.innerHTML = `Game Point: ${gamePoint}`;

//Game Loop
let statusText = document.querySelector(".statusField");
let isPlayerTurn = true;

//game Loop for the whole game

let playerMove;
let cpuMove;

//CPU Moves
const cpuMoves = [
  { reference: document.querySelector("#cpuRock"), name: "ROCK" },
  {
    reference: document.querySelector("#cpuPaper"),
    name: "PAPER",
  },
  {
    reference: document.querySelector("#cpuScissors"),
    name: "SCISSORS",
  },
];

const randomChoice = () => {
  return Math.floor(Math.random() * 3);
};

function getCpuMove() {
  let cpuChoice = randomChoice();

  cpuMoves[cpuChoice].reference.classList.add("moveLeft");
  cpuMove = cpuMoves[cpuChoice].name;
  isPlayerTurn = true;
  changeGameStatus(isPlayerTurn);
}

//Player Moves
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
    getCpuMove();
  }
});
playerMoves.paper.addEventListener("click", () => {
  if (isPlayerTurn) {
    playerMove = "PAPER";
    playerMoves.paper.classList.add("moveRight");
    isPlayerTurn = false;
    changeGameStatus(isPlayerTurn);
    getCpuMove();
  }
});
playerMoves.scissors.addEventListener("click", () => {
  if (isPlayerTurn) {
    playerMove = "SCISSORS";
    playerMoves.scissors.classList.add("moveRight");
    isPlayerTurn = false;
    changeGameStatus(isPlayerTurn);
    getCpuMove();
  }
});
