const computerChoice = getComputerChoice();
const input = prompt('Choose rock, paper or scissors');
const playerChoice = checkPlayerChoice(input);

function getComputerChoice(){
   let randomNumber=Math.floor(Math.random()*10+1);
   console.log(randomNumber);
   
    if(randomNumber<4){
        console.log('rock');
        return "ROCK";
    }else if (randomNumber<7){
        console.log('paper');
        return "PAPER";
    }else if (randomNumber<=10){       
        console.log('sc');
        return "SCISSORS";
    }
   
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

function result(){
    // check win condition
    if(playerChoice === 'Choice is unavailable.'){
        return playerChoice;
    }else{
        if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||(playerChoice === 'PAPER' && computerChoice === 'ROCK') || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')){
            return `Computer chose ${computerChoice.toLowerCase()}, you win!`;
        } else if (playerChoice === computerChoice){
            return `Computer chose ${computerChoice.toLowerCase()}, it's a tie!`;
        } else {
            return `Computer chose ${computerChoice.toLowerCase()}, you lost!`;
        }
    }
}

alert(result());