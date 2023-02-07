

        let currentPlayerScore = 0;
        let currentComputerScore = 0

        const score = document.querySelector('#current-score');        
        const results = document.querySelector('#game-outcome');
        const gameOver = document.querySelector('#game-over');

        const playerScore = document.createElement('div');
        playerScore.classList.add('playerScore');
        playerScore.textContent = "Player: " + `${currentPlayerScore}`;
        score.appendChild(playerScore);

        const computerScore = document.createElement('div');
        computerScore.classList.add('computerScore');
        computerScore.textContent = "Computer: " + `${currentComputerScore}`;
        score.appendChild(computerScore);

        const currentGameDetails = document.createElement('div');
        currentGameDetails.classList.add('currentGameDetails');
        currentGameDetails.textContent = "MAKE A SELECTION";
        results.appendChild(currentGameDetails);

        const finalGameDetails = document.createElement('div');
        finalGameDetails.classList.add('finalGameDetails');
        finalGameDetails.textContent = " ";
        gameOver.appendChild(finalGameDetails);


        const button = document.querySelectorAll('.rps-button-container > button');
        button.forEach((button)=> {

        button.addEventListener('click', function(){ 

            finalGameDetails.textContent = " ";

            playRound(`${button.id}`,getComputerSelection())
            
            });
        });


        const newGame = document.querySelector('.new-game-btn')
        newGame.addEventListener('click', function(){

            currentPlayerScore = 0;
            currentComputerScore = 0;

            finalGameDetails.textContent = " ";

            currentGameDetails.textContent = "MAKE A SELECTION";
            playerScore.textContent = "Player: " + `${0}`;
            computerScore.textContent = "Computer: " + `${0}`;

        })


        function getComputerSelection() {

            var selection = ["Rock","Paper","Scissors"];
            var computerSelection = selection[Math.floor(Math.random()*selection.length)];
            return computerSelection;

        }


        function playRound (playerSelection, computerSelection = getComputerSelection()) {

            //currentPlayerScore and currentComputerScore do not need to be incremented when there is a tie game
            if (playerSelection === computerSelection) {

                currentGameDetails.textContent = "Tie Game!";
            }

            else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
                     (playerSelection === "Paper" && computerSelection === "Rock") ||
                     (playerSelection === "Scissors" && computerSelection === "Paper")) {

                currentPlayerScore += 1;
                playerScore.textContent = "Player: " + `${currentPlayerScore}`;
                checkScore("You Won! ", playerSelection, computerSelection);
            }

            else {

                currentComputerScore += 1;
                computerScore.textContent = "Computer: " + `${currentComputerScore}`;
                checkScore("You Lost! ", computerSelection, playerSelection);
            }
        }


        function checkScore(message, winner, loser){

            const currentOutcome = `${message}` + `${winner}` + " beats " +`${loser}` + ".";
        
            const finalOutcome = (currentComputerScore === 5) ? 'GAME OVER, YOU LOST. :('
                            : (currentPlayerScore === 5) ? 'GAME OVER, YOU WON! :)'
                            : "";


            currentGameDetails.textContent = `${currentOutcome}`;
            finalGameDetails.textContent = `${finalOutcome}`;

            if (currentComputerScore === 5 || currentPlayerScore == 5){

                currentPlayerScore = 0;
                currentComputerScore = 0;
                playerScore.textContent = "Player: " + `${0}`;
                computerScore.textContent = "Computer: " + `${0}`;

            }
        }