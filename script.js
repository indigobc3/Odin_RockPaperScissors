
//ROCK PAPER SCISSORS

 //set variables
    let computerScore = 0;
    let playerScore = 0;
    let roundWinner;
    let computerSelection;

//set up game when window loads
    window.onload = game();

//function - computer randomly selects rock paper or scissors
    function computerPlay() {
        let rpsArray = ["rock", "paper", "scissors"];
        return rpsArray[Math.floor(Math.random() * rpsArray.length)];
    }
        
        
//loop - gameplay 5 rounds, return final winner
    function game() {
        for (let i = 1; i <= 5; i++) {
            let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
            playRound(playerSelection);
            console.log(`Round ${i}`);
            console.log(`Computer picks ${computerSelection}, Player picks ${playerSelection} so ${roundWinner}`);
        }
        if (i = 5) {
            if (playerScore > computerScore) {
                console.log(`Game over! Player wins with ${playerScore} points`);
            }
            else if (playerScore < computerScore) {
                console.log(`Game over! Player wins with ${computerScore} points`);
            }
            else {
                console.log(`Game over! It's a tie, with a final score of ${playerScore} points for the Player and ${computerScore} points for the computer`);
                }
            }
    }

//function - compares player and computer selections, returns round result
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
        return playerScore;
        return computerScore;
    }

        