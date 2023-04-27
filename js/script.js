function getComputerChoice(){
   let randomNumber=Math.floor(Math.random()*10+1);   
    if(randomNumber<4){
        return "ROCK";
    }else if (randomNumber<7){
        return "PAPER";
    }else if (randomNumber<=10){       
        return "SCISSORS";
    }   
}

function getPlayerChoice(){
    return prompt('Choose rock, paper or scissors');
}

function checkPlayerChoice(choice){
    if (typeof choice === 'string' || choice instanceof String){
        let upperChoice = choice.toUpperCase();
        if (upperChoice === 'ROCK' || upperChoice === 'PAPER' || upperChoice === 'SCISSORS'){
            return upperChoice;
        }else{
            return "Choice is unavailable."
        }
    }else{
        return "Choice is unavailable.";
    }
}

function whoWins(a,b){
    if ((a === 'ROCK' && b === 'SCISSORS') ||(a === 'PAPER' && b === 'ROCK') || (a === 'SCISSORS' && b === 'PAPER')){
        return 'player1';
    } else if (a === b){
        return `tie`;
    } else {
        return `player2`;
    }
}

function game(){   
    let playerScore = 0;
    let computerScore = 0;
    let highestScore = 0; 
    let roundsToPlay = 5;
    while(highestScore<=((roundsToPlay-1)/2)){
        let computerChoice = getComputerChoice();        
        let playerChoice = checkPlayerChoice(getPlayerChoice());
        if(playerChoice === 'Choice is unavailable.'){   
            while (playerChoice === 'Choice is unavailable.'){
                alert('Choice is unavailable.');
                playerChoice = checkPlayerChoice(getPlayerChoice());
            }
        }
        let winner = whoWins(playerChoice, computerChoice);
        if (winner === 'player1'){
            alert(`${playerChoice.toLowerCase()} vs ${computerChoice.toLowerCase()} ${"\n"}You Win!`);
            playerScore++;
        }else if(winner === 'player2'){
            alert(`${playerChoice.toLowerCase()} vs ${computerChoice.toLowerCase()} ${"\n"}You Lose!`);
            computerScore++;
        } else {
            alert(`${playerChoice.toLowerCase()} vs ${computerChoice.toLowerCase()} ${"\n"}It's a Tie!`);
        }
        if(playerScore>=computerScore){
            highestScore=playerScore;
        }else{
            highestScore=computerScore;
        }
    }
    if (playerScore === computerScore){
        alert(`It's a tie! ${"\n"}You ${playerScore} vs ${computerScore} CPU`);
    } else if (playerScore > computerScore){
        alert(`You win! ${"\n"}You ${playerScore} vs ${computerScore} CPU`);
    } else {
        alert(`You lose! ${"\n"}You ${playerScore} vs ${computerScore} CPU`);
    }
    
}
game();

