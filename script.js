let humanScore = 0;
let computerScore = 0;
let gameCount = 0;


function getComputerChoice() {
    const cpu = Math.floor(Math.random() * 3);
    return cpu;
}

function getHumanChoice() {
    const userInput = parseInt(prompt("0 for rock, 1 for paper or 2 for scissors?: "));
    human = userInput;
    return human;
    }

// console.log(`user choice ${getHumanChoice()}`);
// console.log(`cpu choice ${getComputerChoice()}`);

function playRound(humanChoice, computerChoice) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    humanSelection;
    computerSelection;

    if (humanSelection === 0 && computerSelection === 0) {
        console.log("tie");
        gameCount +=1;
    } else if (humanSelection === 1 && computerSelection === 0) {
        console.log("you win");
        humanScore += 1;
        gameCount +=1;
    } else if (humanSelection === 0 && computerSelection === 1) {
        console.log("you lose");
        computerScore +=1;
        gameCount +=1;
    } else if (humanSelection === 1 && computerSelection === 1) {
        console.log("tie");
        gameCount +=1;
    } else if (humanSelection === 2 && computerSelection === 1) {
        console.log("you win");
        humanScore += 1;
        gameCount +=1;
    } else if (humanSelection === 0 && computerSelection === 2) {
        console.log("you win");
        humanScore += 1;
        gameCount +=1;
    } else if (humanSelection === 1 && computerSelection === 2) {
        console.log("you lose");
        computerScore +=1;
        gameCount +=1;
    } else if (humanSelection === 2 && computerSelection === 2) {
        console.log("tie");
        gameCount +=1;
    } else if (humanSelection === 2 && computerSelection == 0) {
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
