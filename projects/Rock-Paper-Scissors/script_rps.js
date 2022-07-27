//Choices
const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

//Game Point
let gamePoint;

//Poitns for ENEMY and USER
let enemyPoint = 0,
  userPoint = 0;

//Get Game Point
while (isNaN(gamePoint) || !gamePoint) {
  gamePoint = prompt("Game Point:");
}

const getUserChoice = () => {
  let userChoice;
  let isValid = false;
  while (!isValid) {
    userChoice = prompt("What is your move? \r\nRock\r\nPaper\r\nScissors");
    let choice = userChoice.toUpperCase();
    isValid = CHOICES.includes(choice);
  }
  return userChoice.toUpperCase();
};

const getCPUChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3);
  return CHOICES[randomChoice];
};

function checkWinner(userChoice, cpuChoice) {
  //USER WIN
  if (userChoice === "ROCK" && cpuChoice === "SCISSORS") {
    userPoint++;
    console.log("USER POINT: " + userPoint);
    return `You Win! ${userChoice} beats ${cpuChoice}`;
  } else if (userChoice === "SCISSORS" && cpuChoice === "PAPER") {
    userPoint++;
    console.log("USER POINT: " + userPoint);
    return `You Win! ${userChoice} beats ${cpuChoice}`;
  } else if (userChoice === "PAPER" && cpuChoice === "ROCK") {
    userPoint++;
    console.log("USER POINT: " + userPoint);
    return `You Win! ${userChoice} beats ${cpuChoice}`;
  } else if (cpuChoice === "ROCK" && userChoice === "SCISSORS") {
    //CPU WIN
    enemyPoint++;
    console.log("CPU POINT: " + enemyPoint);
    return `You Lose! ${cpuChoice} beats ${userChoice}`;
  } else if (cpuChoice === "SCISSORS" && userChoice === "PAPER") {
    enemyPoint++;
    console.log("CPU POINT: " + enemyPoint);
    return `You Lose! ${cpuChoice} beats ${userChoice}`;
  } else if (cpuChoice === "PAPER" && userChoice === "ROCK") {
    enemyPoint++;
    console.log("CPU POINT: " + enemyPoint);
    return `You Lose! ${cpuChoice} beats ${userChoice}`;
  } else {
    return "DRAW!";
  }
}

//Game Loop
while (true) {
  if (userPoint >= gamePoint) {
    console.log("User Wins!");
    break;
  } else if (enemyPoint >= gamePoint) {
    console.log("CPU Wins!");
    break;
  }
  let userChoice = getUserChoice();
  console.log(`You chose ${userChoice}`);
  let cpuChoice = getCPUChoice();
  console.log(`CPU chose ${cpuChoice}`);

  let winner = checkWinner(userChoice, cpuChoice);
}
