
//ROCK PAPER SCISSORS

 //set variables
    let computerScore = 0;
    let playerScore = 0;
    let roundWinner;
    let computerSelection;
    let playerSelection;
    let gameNumber = 0;
    const roundNum = document.querySelector('#roundNum');
    const pScore = document.querySelector('#playerScore');
    const cScore = document.querySelector('#computerScore');
    const roundResult = document.querySelector('#roundResult');
    const gameOver = document.querySelector('.gameOver');

//computer random selection
function computerPlay() {
    let rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

//compares player and computer selections, returns player and computer scores
function playRound(playerSelection) {
    computerSelection = computerPlay();

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        roundWinner = "Player wins!";
        playerScore++;
    }
    else if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
        roundWinner = "Computer wins!";

    } else if (playerSelection === computerSelection) {
        roundWinner = "it's a tie!";
    } 
    else {
        roundWinner = "Player's choice is invalid";
    }
}
        
//game display - round#, scores, results
function gamePlay() {
    roundNum.textContent = "Round: " + gameNumber;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    roundResult.textContent = `Computer picks ${computerSelection}, Player picks ${playerSelection} so ${roundWinner}`;
    if (gameNumber === 5) {
        if (playerScore > computerScore) {
            gameOver.textContent = `Game over! Player wins with ${playerScore} points`;
        }
        else if (playerScore < computerScore) {
            gameOver.textContent = `Game over! Computer wins with ${computerScore} points`;
        }
        else {
        gameOver.textContent = `Game over! It's a tie, with a final score of ${playerScore} points for the Player and ${computerScore} points for the computer`;
        }
    }
}

//button event listener - player selection assigned
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id.toString();
        playRound(playerSelection);
        gameNumber++;
        gamePlay();
    });
});
