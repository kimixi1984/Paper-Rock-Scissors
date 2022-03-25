function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    let result = arr[choice];
    console.log(result);
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("Draw");
    } else if (playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "paper"){
            console.log("You loose");
        } else {
            console.log("You win");
        }
    } else if(playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "rock"){
            console.log("You loose");
        } else{
            console.log("You win");
        }
    } else if(playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "rock"){
            console.log("You loose");
        }else{
            console.log("You win");
        }
    }   
}


const playerSelection = "rock";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
