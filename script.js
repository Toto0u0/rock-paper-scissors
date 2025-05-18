let humanScore = 0;
let computerScore = 0;
let gameCount = 0;


function getComputerChoice() {
    const cpuChoice = Math.floor(Math.random() * 3);
    if (cpuChoice === 0) {
        cpu = "rock";
        return cpu;
    } else if (cpuChoice === 1) {
        cpu = "paper";
        return cpu;
    } else if (cpuChoice === 2) {
        cpu = "scissors";
        return cpu;
    }
}

function getHumanChoice() {
    const userInput = parseInt(prompt("0 for rock, 1 for paper or 2 for scissors?: "));
    if (userInput === 0) {
        human = "rock";
        return human;
    } else if (userInput === 1) {
        human = "paper";
        return human;
    } else if (userInput === 2) {
        human = "scissors";
        return human;
    }
}

// console.log(`user choice ${getHumanChoice()}`);
// console.log(`cpu choice ${getComputerChoice()}`);

function playRound(humanChoice, computerChoice) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    humanSelection;
    computerSelection;

    if (humanSelection === "rock" && computerSelection === "rock") {
        console.log("tie");
        gameCount +=1;
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("you win");
        humanScore += 1;
        gameCount +=1;
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("you lose");
        computerScore +=1;
        gameCount +=1;
    } else if (humanSelection === "paper" && computerSelection === "paper") {
        console.log("tie");
        gameCount +=1;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("you win");
        humanScore += 1;
        gameCount +=1;
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("you win");
        humanScore += 1;
        gameCount +=1;
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        console.log("you lose");
        computerScore +=1;
        gameCount +=1;
    } else if (humanSelection === "scissors" && computerSelection === "scissors") {
        console.log("tie");
        gameCount +=1;
    } else if (humanSelection === "scissors" && computerSelection == "rock") {
        console.log("you lose");
        computerScore +=1;
        gameCount +=1;
    }

    console.log("                             ");
    console.log(`user choice ${humanSelection}`);
    console.log(`cpu choice ${computerSelection}`);
    console.log("                               ");
    console.log(`Game ${gameCount} score is: ${humanScore} to ${computerScore}`);

}
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// function playGame() {
//     for (var i = 1; i < 6; i++) playRound();
// }

function playGame() {
    while (humanScore < 3 && computerScore < 3) 
        playRound();
}

playGame();
