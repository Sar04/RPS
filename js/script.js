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

function getComputerChoice2(){
    let randomNumber=Math.floor(Math.random()*10+1);   
     if(randomNumber<4){
         console.log('1');
         return 1;
     }else if (randomNumber<7){
        console.log('2');
         return 2;
     }else if (randomNumber<=10){  
        console.log('3');     
         return 3;
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
    if ((a === 'ROCK' && b === 'SCISSORS') ||
        (a === 'PAPER' && b === 'ROCK') || 
        (a === 'SCISSORS' && b === 'PAPER')){

        return 'player1';
    } else if (a === b){
        return `tie`;
    } else {
        return `player2`;
    }
}

function whoWins2(a,b){
   if(a==b) alert('tie');
   else if(a!=1 && a>b) alert('you won');
   else if(a == 1 && b == 3) alert ('you won');
   else alert('you lost');
}

function runGame(){   

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
// runGame();

let playerChoice2 = 0;
const ROCK = document.querySelector('#rock');
const PAPER = document.querySelector('#paper');
const SCISSORS = document.querySelector('#scissors');
const DISPLAY = document.querySelector('#display');

function playRound(){
    console.log('play');
    const computerChoice2 = getComputerChoice2();
    whoWins2(playerChoice2,computerChoice2);
    let paragraph = document.createElement('p');
    paragraph.textContent = `you chose ${playerChoice2} vs ${computerChoice2}`;
    DISPLAY.appendChild(paragraph);
    if (DISPLAY.childElementCount > 1){
        DISPLAY.removeChild(DISPLAY.firstChild);
    }
}

ROCK.addEventListener('click', ()=>
{
    playerChoice2 = 1;
    playRound();
});
PAPER.addEventListener('click', ()=>{
    playerChoice2 = 2;
});
SCISSORS.addEventListener('click', ()=> {
    playerChoice2 = 3;
});

// ROCK.addEventListener('click', ()=> console.log('1'));
// PAPER.addEventListener('click', ()=> console.log('2'));
// SCISSORS.addEventListener('click', ()=> console.log('3'));


