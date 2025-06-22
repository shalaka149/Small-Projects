 let score = JSON.parse(localStorage.getItem('score')) ||
        {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScoreElement();

        /* if (!score) {
            score = {
               wins: 0,
               losses: 0,
               ties: 0
            };
         }*/

        function playGame(playerMove) {

            //Math.random generates a number between 0<= x <1
            const compMove = pickComputerMove();

            let result = '';

            if (playerMove === 'scissors') {
                if (compMove === 'rock') {
                    result = 'You Lose!';
                } else if (compMove === 'paper') {
                    result = 'You Win!';
                } else if (compMove === 'scissors') {
                    result = 'Tie';
                }

            } else if (playerMove === 'paper') {
                if (compMove === 'rock') {
                    result = 'You Win!';
                } else if (compMove === 'paper') {
                    result = 'Tie';
                } else if (compMove === 'scissors') {
                    result = 'You Lose!';
                }

            } else if (playerMove === 'rock') {
                if (compMove === 'rock') {
                    result = 'Tie';
                } else if (compMove === 'paper') {
                    result = 'You Lose!';
                } else if (compMove === 'scissors') {
                    result = 'You Win!';
                }
            }

            if (result === 'You Win!') {
                score.wins += 1;
            } else if (result === 'You Lose!') {
                score.losses += 1;
            } else if (result === 'Tie') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `You: <img src="./images/${playerMove}-emoji.png" 
            class="move-icon"> v/s
            <img src="./images/${compMove}-emoji.png" 
            class="move-icon">
            :Computer`;
                   }

        function updateScoreElement() {
            document.querySelector('.js-score')
                .innerHTML = `Wins: ${ score.wins }, Losses: ${ score.losses }, Ties: ${ score.ties }`;
        }

        function pickComputerMove() {
            const randomNum = Math.random();
            let compMove = '';
            if (randomNum >= 0 && randomNum < 1 / 3) {
                compMove = 'rock';
            }
            else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
                compMove = 'paper';
            }
            else if (randomNum >= 2 / 3 && randomNum < 1) {
                compMove = 'scissors';
            }
            console.log(compMove);
            return compMove;
            //after return satement, function is exited. So anything after return is not performed
        }