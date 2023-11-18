function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(pl_choice, computerSelection) {
    let res = "Use buttons to play!";
    if (pl_choice==="rock" && computerSelection==="paper") res = "You Lose! Paper beats Rock.";
    else if (pl_choice==="rock" && computerSelection==="scissor") res = "You Win! Scissor beats Rock.";
    else if (pl_choice==="paper" && computerSelection==="rock") res = "You Win! Paper beats Rock.";
    else if (pl_choice==="paper" && computerSelection==="scissor") res = "You Lose! Scissors beats Paper.";
    else if (pl_choice==="scissor" && computerSelection==="rock") res = "You Lose! Rock beats Scissors.";
    else if (pl_choice==="scissor" && computerSelection==="paper") res = "You Win! Scissors beats Paper.";
    else if (pl_choice === computerSelection) res = "Woah! looks like it's a tie.";
    else res = "Error, condition not handled";
    return res;
}

function play(){
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    // console.log(playerSelection, computerSelection, result):
    const msg = document.querySelector("#message");
    msg.textContent = result;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
rockBtn.addEventListener("click", play);
paperBtn.addEventListener("click", play);
scissorBtn.addEventListener("click", play);

// let count = 0, playerSelection="";
// alert("Welcome to Rock Paper Scissors!");
// while(playerSelection!=="quit"){
//     playerSelection = prompt("Enter rock, paper or scissors to play!\nEnter quit to stop.");
//     let computerSelection = getComputerChoice();
//     alert(playRound(playerSelection, computerSelection));
// }

const bgDiv = document.querySelector(".two");
const seaBtn = document.querySelector("#seas");
const hillBtn = document.querySelector("#hills");
hillBtn.addEventListener("click", ()=>{
    bgDiv.style["background-image"] = 'url("https://media0.giphy.com/media/1oGXIfsxujwGk7OoES/giphy.gif?cid=ecf05e4744prh7ry08m7uk1v0s18sx5apwf8uvrgi3gb7j9s&ep=v1_gifs_related&rid=giphy.gif&ct=g")';
});
seaBtn.addEventListener("click", ()=>{
    bgDiv.style["background-image"] = 'url("https://media2.giphy.com/media/798oH0WDEQnicM4857/giphy.gif?cid=ecf05e47zpu64vdk798vptyte1rcbqaop18gix0x70ux20kk&ep=v1_gifs_search&rid=giphy.gif&ct=g")';
});