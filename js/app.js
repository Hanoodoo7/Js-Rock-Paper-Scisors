/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];


/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice; 
let msg;


/*------------------------ Cached Element References ------------------------*/

const choice = ["rock", "paper", "scissors"];

const rockBtnEl = document.querySelector
('#rock');
const paperBtnEl = document.querySelector
('#paper');
const scissorsBtnEl = document.querySelector
('#scissors');
const resetBtnEl = document.querySelector
('#reset');

const resultDisplayEl = document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/
play();

function getcomputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(Event){

    computerChoice = getcomputerChoice();
    render();
}

function render() {
    msg = compareChoices(playerChoice, computerChoice);
    resultDisplayEl.textContent = `Player's choice: ${playerChoice}, Computer chose: ${computerChoice}. Result: ${msg}`;
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

resetBtnEl.addEventListener('click', () => {
    playerChoice = '';
    computerChoice = '';
    resultDisplayEl.textContent = 'Game reset. Please make a choice.';
});

/*----------------------------- Event Listeners -----------------------------*/

rockBtnEl.addEventListener('click', () => {
    playerChoice = 'rock';
    play();
});
paperBtnEl.addEventListener('click', () => {
    playerChoice = 'paper';
    play();
});
scissorsBtnEl.addEventListener('click', () => {
    playerChoice = 'scissors';
    play();
});

document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);