const computerChoice = getComputerChoice();
const playerChoice = checkPlayerChoice(prompt("please enter your choice"));

function getComputerChoice(){
   let randomNumber=Math.floor(math.random()*10+1);
   switch (randomNumber){
    case randomNumber<4:
        return "ROCK";
    case randomNumber<7:
        return "PAPER";
    case randomNumber<=10:
        return "SCISSORS";
   }
}

function checkPlayerChoice(choice){
    if (typeof choice === 'string' || choice instanceof String){
        let upperChoice = choice.toUpperCase();
        if (upperChoice === 'ROCK' || upperChoice === 'PAPER' || upperChoice === 'SCISSORS'){
            return upperChoice;
        }else{
            retun "Choice is unavailable."
        }
    }else{
        return "Choice is unavailable.";
    }
}

function result(){
    // check win condition
    if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||(playerChoice === 'PAPER' && computerChoice === 'ROCK') || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')){
        return 'You win!';
    } else if (playerChoice === computerChoice){
        return "It's a tie!";
    } else {
        return 'You lost!';
    }
}

alert(result());