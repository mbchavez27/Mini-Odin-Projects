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

//Game Loop for the whole game
let statusText = document.querySelector(".statusField");
let isPlayerTurn = true;

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
  checkWinner();
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

function resetGame() {
  playerMoves.rock.classList.remove("moveRight");
  playerMoves.paper.classList.remove("moveRight");
  playerMoves.scissors.classList.remove("moveRight");
  cpuMoves[0].reference.classList.remove("moveLeft");
  cpuMoves[1].reference.classList.remove("moveLeft");
  cpuMoves[2].reference.classList.remove("moveLeft");
  isPlayerTurn = true;
  changeGameStatus(isPlayerTurn);
  statusText.innerHTML = "Attack";
  statusText.style.visibility = "hidden";
}

let gameOver = false;
function checkWinner() {
  //Winners
  if (playerMove === "ROCK" && cpuMove === "SCISSORS") {
    statusText.style.visibility = "visible";
    statusText.innerHTML = `You win ${playerMove} beats ${cpuMove}`;
    playerPoint++;
    playerPointCounter.innerHTML = `Player Point: ${playerPoint}`;
  } else if (playerMove === "SCISSORS" && cpuMove === "PAPER") {
    statusText.style.visibility = "visible";
    statusText.innerHTML = `You win ${playerMove} beats ${cpuMove}`;
    playerPoint++;
    playerPointCounter.innerHTML = `Player Point: ${playerPoint}`;
  } else if (playerMove === "PAPER" && cpuMove === "ROCK") {
    statusText.style.visibility = "visible";
    statusText.innerHTML = `You win ${playerMove} beats ${cpuMove}`;
    playerPoint++;
    playerPointCounter.innerHTML = `Player Point: ${playerPoint}`;
  } else if (cpuMove === "ROCK" && playerMove === "SCISSORS") {
    statusText.style.visibility = "visible";
    statusText.innerHTML = `You lose ${cpuMove} beats ${playerMove}`;
    cpuPoint++;
    cpuPointCounter.innerHTML = `CPU Point: ${cpuPoint}`;
  } else if (cpuMove === "SCISSORSS" && playerMove === "PAPER") {
    statusText.style.visibility = "visible";
    statusText.innerHTML = `You lose ${cpuMove} beats ${playerMove}`;
    cpuPoint++;
    cpuPointCounter.innerHTML = `CPU Point: ${cpuPoint}`;
  } else if (cpuMove === "PAPER" && playerMove === "ROCK") {
    statusText.style.visibility = "visible";
    statusText.innerHTML = `You lose ${cpuMove} beats ${playerMove}`;
    cpuPoint++;
    cpuPointCounter.innerHTML = `CPU Point: ${cpuPoint}`;
  } else {
    statusText.style.visibility = "visible";
    statusText.innerHTML = `DRAW!`;
  }
  //Check Game Point
  if (playerPoint >= gamePoint) {
    gameStatus.innerHTML = "Game Over! Player Wins the Game";
    gameOver = true;
  }
  if (cpuPoint >= gamePoint) {
    gameStatus.innerHTML = "Game Over! CPU Wins the Game";
    gameOver = true;
  }

  //Delay then Reset the Game
  setTimeout(() => {
    if (!gameOver) {
      resetGame();
    }
  }, 1000);
}
