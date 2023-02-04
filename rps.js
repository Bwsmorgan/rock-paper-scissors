console.log('hi')

let currentPlayerScore = 0;
let currentComputerScore = 0

const score = document.querySelector('#score-container');        
const result = document.querySelector('#score-container');
        
const playerScore = document.createElement('div');
playerScore.classList.add('playerScore');
playerScore.textContent = "Player: " + `${currentPlayerScore}`;
score.appendChild(playerScore);

const computerScore = document.createElement('div');
computerScore.classList.add('computerScore');
computerScore.textContent = "Computer: " + `${currentComputerScore}`;
score.appendChild(computerScore);


const button = document.querySelectorAll('#button-container > button');

button.forEach((button)=> {

    button.addEventListener('click', function(){ 

        playRound(`${button.id}`,getComputerChoice())
    });
});


function getComputerChoice() {

    var choices = ["rock","paper","scissors"];
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;

}


function playRound (playerSelection = button, computerSelection = getComputerChoice()) {
    
    console.log(computerSelection);
    console.log(playerSelection);

    
    if (playerSelection.toLowerCase() === computerSelection) {
        
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Tie!';
        result.appendChild(content);

    }

    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You Win!';
        result.appendChild(content);

        currentPlayerScore += 1;
        playerScore.textContent = "Player: " + `${currentPlayerScore}`;
        
        if(currentPlayerScore === 5){
            content.textContent = "GAME OVER! YOU WON!";
            result.appendChild(content);
            //console.log("game over")
        }
        
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You Win!';
        result.appendChild(content);

        currentPlayerScore += 1;
        playerScore.textContent = "Player: " + `${currentPlayerScore}`;

        if(currentPlayerScore === 5){
            content.textContent = "GAME OVER! YOU WON!";
            result.appendChild(content);
            //console.log("game over")
        }

    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You Win!';
        result.appendChild(content);

        currentPlayerScore += 1;
        playerScore.textContent = "Player: " + `${currentPlayerScore}`;

        if(currentPlayerScore === 5){
            content.textContent = "GAME OVER! YOU WON!";
            result.appendChild(content);
            //console.log("game over")
        }

    }

    else {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You Lose!';
        result.appendChild(content);

        currentComputerScore += 1;
        computerScore.textContent = "Computer: " + `${currentComputerScore}`;

        if(currentComputerScore === 5){
            content.textContent = "GAME OVER! THE COMPUTER WON!";
            result.appendChild(content);
            //console.log("game over")
        }
        
    }
}

function checkScore(){

    console.log('hi')
    return
    return currentComputerScore === 5 ? "Game Over. The computer won!" : null;

}

/*

function game() {

    var playerScore = 0;
    var computerScore = 0;
    
    //Need to play a new Round each time we go through the loop which is why we call gameOutcome inside the loop
    
    for (let i=0; i<5; i++) {

        var gameOutcome = playRound(playerSelection, computerSelection = getComputerChoice());

        if(gameOutcome === "tie"){

            playerScore += 0;
            computerScore += 0;
            console.log(`${playerSelection},${computerSelection}`)
            console.log(`${playerScore},${computerScore}`)
        }

        else if(gameOutcome === "win"){

            playerScore += 1;
            console.log(`${playerSelection},${computerSelection}`)
            console.log(`${playerScore},${computerScore}`)
        }
        else{

            computerScore += 1;
            console.log(`${playerSelection},${computerSelection}`)
            console.log(`${playerScore},${computerScore}`)
        }
    }

    const result = (playerScore > computerScore) ? "You win!" : (playerScore === computerScore) ? "Tie!" : "Computer won!";
    
    return result;
    console.log(`${playerScore},${computerScore}`)
}*/

