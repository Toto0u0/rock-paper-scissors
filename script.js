function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    }
    const rndInt = getComputerChoice();



let userInput = parseInt(prompt("0 for rock, 1 for paper or 2 for scissors?: "));
function getHumanChoice(userInput) {
    return userInput;
    }

console.log(userInput);
console.log(rndInt);


if (userInput === 0 && rndInt === 0) {
    console.log("tie");
} else if (userInput === 1 && rndInt === 0) {
    console.log("you win");
} else if (userInput === 0 && rndInt === 1) {
    console.log("you lose");
} else if (userInput === 1 && rndInt === 1) {
    console.log("tie");
} else if (userInput === 2 && rndInt === 1) {
    console.log("you win");
} else if (userInput === 0 && rndInt === 2) {
    console.log("you win");
} else if (userInput === 1 && rndInt === 2) {
    console.log("you lose");
} else if (userInput === 2 && rndInt === 2) {
    console.log("tie");
}
