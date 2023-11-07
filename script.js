function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let res = "thanks for the match", pl_choice= playerSelection.toLowerCase();
    if (pl_choice==="rock" && computerSelection==="paper") res = "You Lose! Paper beats Rock";
    else if (pl_choice==="rock" && computerSelection==="scissors") res = "You Win! Scissor beats Rock";
    else if (pl_choice==="paper" && computerSelection==="rock") res = "You Win! Paper beats Rock";
    else if (pl_choice==="paper" && computerSelection==="scissors") res = "You Lose! Scissors beats Paper";
    else if (pl_choice==="scissors" && computerSelection==="rock") res = "You Lose! Rock beats Scissors";
    else if (pl_choice==="scissors" && computerSelection==="paper") res = "You Win! Scissors beats Paper";
    return res;
}

let count = 0, playerSelection="";
alert("Welcome to Rock Paper Scissors!");
while(playerSelection!=="quit"){
    playerSelection = prompt("Enter rock, paper or scissors to play!\nEnter quit to stop.");
    let computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
}