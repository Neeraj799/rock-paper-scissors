function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
    {
    return "It's a tie";
    }

    else if
    
        ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock" ) ||
        (playerSelection === "scissors" && computerSelection ==="paper"))
        {
            return "You Win!"
        } 
        else 
        {
            return "You Lose!"
        }
}

function playGame(){
let playerSelection = document.getElementById("Enter a choice").value.toLowerCase();
const computerSelection = getComputerChoice();
let result = playRound(playerSelection,computerSelection);
document.getElementById("game result").textContent = result;

}
    
