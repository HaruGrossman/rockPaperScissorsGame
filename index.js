// create function to get computer choice
// random num 1,2,3 
// if 1 = Rock
// if 2 = paper
// if 3 = scissor

function getComputerChoice() {
    let computerNumb = Math.floor(Math.random() * 3 + 1);
    // console.log(computerNumb);
    if (computerNumb === 1) {
        return "Rock"
    } else if (computerNumb === 2) {
        return "Paper"
    } else {
        return "Scissor"
    }
}
getComputerChoice();
//console.log(getComputerChoice());



// create function that plays a single round of rock paper scissors
// function should take two parameters
// -the playerSelection
// -the computerSelection
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
///// make your function's playerSelection parameter case-insensitive (so users can input rock, ROCK, Rock or any other variation)

function playTheGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Tie play again!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor") {
        return "You win! Rock beats Scissor"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats Rock"
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper") {
        return "You win! Scissor beats Paper"
    } else if (computerSelection.toLowerCase() === "scissor") {
        return "You lose! Scissor beats Paper"
    } else if (computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats Scissor"
    } else if (computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats Rock"
    }
}

// playTheGame();

// const playerSelection = prompt("rock, paper, scissor");
const computerSelection = getComputerChoice();
// console.log(playTheGame(playerSelection, computerSelection))


// write a NEW function called game(). use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or looser at the end

function gameScoreKeeper() {
    gameCount = 0;
    for (let i = 0; i <= 5; i++) {
        // playerSelection = prompt("rock, paper, scissor");
        console.log(playTheGame(playerSelection, computerSelection));
        console.log(gameCount++);
        // gameCount++;
    }
}
gameScoreKeeper()