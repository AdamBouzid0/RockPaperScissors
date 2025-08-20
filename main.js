function getComputerChoice() {
    let choice = Math.random();
    if (choice >= 0 && choice < 1/3) {
        return "rock";
    } else if (choice >= 1/3 && choice < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let result = prompt("What's your move?")
    return result
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win this round!';
        humanScore++;
    } else {
        result = 'Computer wins this round!';
        computerScore++;
    }

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);
    console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
}

// Play 5 rounds
for (let i = 0; i < 5; i++) {
    playRound();
}