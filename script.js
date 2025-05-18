let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    }
    const rndInt = getComputerChoice();



let userInput = parseInt(prompt("0 for rock, 1 for paper or 2 for scissors?: "));
function getHumanChoice(userInput) {
    return userInput;
    }

console.log(`user choice ${userInput}`);
console.log(`cpu choice ${rndInt}`);

function playRound(humanChoice, computerChoice) {
    if (userInput === 0 && rndInt === 0) {
        console.log("tie");
    } else if (userInput === 1 && rndInt === 0) {
        console.log("you win");
        humanScore += 1;
    } else if (userInput === 0 && rndInt === 1) {
        console.log("you lose");
        computerScore +=1;
    } else if (userInput === 1 && rndInt === 1) {
        console.log("tie");
    } else if (userInput === 2 && rndInt === 1) {
        console.log("you win");
        humanScore += 1;
    } else if (userInput === 0 && rndInt === 2) {
        console.log("you win");
        humanScore += 1;
    } else if (userInput === 1 && rndInt === 2) {
        console.log("you lose");
        computerScore +=1;
    } else if (userInput === 2 && rndInt === 2) {
        console.log("tie");
    } else if (userInput === 2 && rndInt == 0) {
        console.log("you lose");
        computerScore +=1;
    }
    console.log(`Score is ${humanScore} to ${computerScore}`);
    getComputerChoice();
    userInput = parseInt(prompt("0 for rock, 1 for paper or 2 for scissors?: "));
    console.log(`user choice ${userInput}`);
    console.log(`cpu choice ${rndInt}`);

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    for (var i = 1; i < 5; i++) playRound();
}

playGame();