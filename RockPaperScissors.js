// Function that gets user's choice
const getUserChoice = userInput => {
    // Makes sure captilization doesn't affect user answer
    userInput = userInput.toLowerCase();
    
    // User Input checking to make sure it is either 'rock' 'paper' or 'scissor'
    if (userInput === 'rock' || userInput === 'scissor' || userInput === 'paper') {
        return userInput;
    } else {
        return console.log('Incorrect input, please choose rock, paper or scissor.');
    }
};

// Function that gets computer's choice by way of Random Number Generator
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'paper';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'rock';
            break;
        default:
            return 'Something went wrong.'
    }
};

// Function to determine winner of game
const determineWinner = (userChoice, computerChoice) => {
    // Tie conditional
    if (userChoice === computerChoice) {
        return 'The game was a tie.'
    }
    // All choices and outcomes
    if (userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'Sorry, the computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, the computer won!';
        } else {
            return 'Congratulations, you won!';
        };
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, the computer won!';
        } else {
            return 'Congratulations you won!';
        }
    }
    // Inacse of incorrect input
    else {
        console.log('Opps something seems to have gone wrong.');
    }
};

// Function to play the game 
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    // logging the results of the game
    console.log(`You threw ${userChoice}`);
    console.log(`The computer threw ${computerChoice}`)
    // Determines the winner, using the functions as parameters
    console.log(determineWinner(userChoice,computerChoice));
};

// Plays the game
playGame();