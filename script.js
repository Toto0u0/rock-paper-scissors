humanScore = 0
computerScore = 0

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const rndInt = getComputerChoice(1, 3);
    if (rndInt == 1) {
        console.log("rock");
    }
    if (rndInt == 2) {
        console.log("paper");
    }
    if (rndInt == 3) {
        console.log("scissors");
    }

let userInput = parseInt(prompt("1 for rock, 2 for paper or 3 for scissors?: "));
function getHumanChoice(userInput) {
    return userInput;
    }
    if (userInput == 1) {
        console.log("rock");
    }
    if (userInput == 2) {
        console.log("paper")
    }
    if (userInput == 3) {
        console.log("scissors")
    }

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 1) && (computerChoice == 1)); {
        console.log("tie");
    } 
    if ((humanChoice == 2) && (computerChoice == 1)); {
        console.log("Human wins");
    }
    if ((humanChoice == 3) && (computerChoice == 1)); {
        console.log("Computer wins");
    }
    if ((humanChoice == 1) && (computerChoice == 2)); {
        console.log("Computer wins");
    }
    if ((humanChoice == 1) && (computerChoice == 3)); {
        console.log("Human wins");
    }
    if ((humanChoice == 2) && (computerChoice == 3)); {
        console.log("Human wins");
    }
    if ((humanChoice == 2) && (computerChoice == 2)); {
        console.log("tie");
    }
    if ((humanChoice == 3) && (computerChoice == 2)); {
        console.log("Human wins");
    }
    if ((humanChoice == 3) && (computerChoice == 3)); {
        console.log("tie");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

