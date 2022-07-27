//Choices
const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

//Game Point
let gamePoint;

//Poitns for ENEMY and USER
let enemyPoint = 0,
  userPoint = 0;

//Get Game Point
while (isNaN(gamePoint)) {
  gamePoint = prompt("Game Point:");
}

const getUserChoice = () => {
  while (true) {
    let userChoice = prompt(
      "What is your move? \r\nRock\r\nPaper\r\nScissors"
    ).toUpperCase();
    return userChoice;
  }
};

const getCPUChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3);
  return CHOICES[randomChoice];
};

const checkWinner = (userChoice, cpuChoice) => {};

//Game Loop
// while (true) {
// if (enemyPoint >= gamePoint || userPoint >= gamePoint) break;
let userChoice = getUserChoice();
console.log(`You chose ${userChoice}`);
let cpuChoice = getCPUChoice();
console.log(`CPU chose ${cpuChoice}`);

checkWinner(userChoice, cpuChoice);
// }
