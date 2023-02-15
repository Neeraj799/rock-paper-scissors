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

    
