function computerPlay() {
	let choice = Math.floor(Math.random()*3);
	return (choice == 0 ? 'Rock' : choice == 1 ? 'Paper' : 'Scissors')
}

//function game(rounds) {
	var playerWins = 0;
	var computerWins = 0;
	


//	while (playerWins + computerWins < 5) {
		
		
		const buttons = document.querySelectorAll('button');
		
		var playerSelection = '';
		buttons.forEach((button) => {
		 	button.addEventListener('click', (e) => {
		 		var result = playRound(button.value, computerPlay());
		 		displayRound(result);
		 	})
		 })
		function displayRound(result){

				const resultDiv = document.querySelector('#result');
				var resultPara = document.createElement('p');
				resultPara.classList.add('resultPara');
				resultPara.textContent = result;
				if (resultDiv.hasChildNodes()){
					resultDiv.replaceChild(resultPara, resultDiv.childNodes[0]);
				} else resultDiv.appendChild(resultPara);
				const score = document.getElementById('score');
				const pscore = document.getElementById('pscore');
				const cscore = document.getElementById('cscore');
				const winRow = document.getElementById('winRow');

				pscore.textContent = playerWins;
				cscore.textContent = computerWins;
				var winner = "";
				
				if (playerWins + computerWins === 5){
					playerWins > computerWins ? winner = "You win the game!" : winner = "Sad, you lost the game..."
					winRow.textContent = winner
					restartGame(score);
				}
		}

		function restartGame(score) {
			
			buttons.forEach((button) => {
		 		button.disabled = true;
		 	});

			const reloadbtn = document.createElement('button')
			const para = document.createElement('p')

			reloadbtn.textContent = "Restart?"
			reloadbtn.addEventListener('click',(e) => location.reload())
			
			score.appendChild(para)
			score.appendChild(reloadbtn);


		}

		function playRound(playerSelection, computerSelection) {
		let player = playerSelection.toLowerCase();
		let computer = computerSelection.toLowerCase();

			if (player == computer) {
				return 'Tie!'
			} else if ( player == 'rock' && computer == 'scissors' || 
						player == 'paper' && computer == 'rock' ||
						player == 'scissors' && computer == 'paper') {
				playerWins++;
				return 'Player Wins! ' + playerSelection + ' beats ' + computerSelection + '!'
			} else {
				computerWins++;
				return 'Computer Wins! ' + computerSelection + ' beats ' + playerSelection + '!'
			}
		}


	
//	}

//	return (playerWins > computerWins ? 'Player wins with ' +playerWins+ ' wins!' : 'Computer wins with ' +computerWins+ ' wins!')
 //}
 //console.log(game(5));
