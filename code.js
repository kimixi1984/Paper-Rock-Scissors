function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    //console.log(choice);
    let result = arr[choice];
   // console.log(result);
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
       // console.log("Draw");
        return "draw";
    } else if (playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "paper"){
           // console.log("You loose");
            return "you loose";
        } else {
            //console.log("You win");
            return "you win";
        }
    } else if(playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "rock"){
           // console.log("You loose");
            return "you loose"
        } else{
           // console.log("You win");
            return "you win";
        }
    } else if(playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "rock"){
            //console.log("You loose");
            return "you loose";
        }else{
            //console.log("You win");
            return "you win"
        }
    }   
}



function game(rounds){
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection = "";
    for (let i=0; i < rounds; i++){
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "you win"){
            playerScore = playerScore + 1;
        }else if (result === "you loose"){
            computerScore = computerScore + 1;
        }
    }
    console.log(playerScore);
    console.log(computerScore);
    if(computerScore < playerScore){
            console.log("You are the winner")
    } else if (computerScore > playerScore){
            console.log("You are the looser")
    } else{
            console.log("This is a draw")
    }
}

const playerSelection = prompt("Enter Rock, Scissors or Paper");


game(10);
