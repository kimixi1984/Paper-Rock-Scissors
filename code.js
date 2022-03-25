function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    let result = arr[choice];
    console.log(result);
    return result;
}
computerPlay();
