function computerPlay() {
	let choice = Math.floor(Math.random()*3);
	return (choice == 0 ? 'Rock' : choice == 1 ? 'Paper' : 'Scissors')
}

function game(rounds) {
	var playerWins = 0;
	var computerWins = 0;

	while (playerWins + computerWins < 5) {
		
		var computerSelection = computerPlay();
		var playerSelection = prompt("Make a selection")

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

		console.log(playRound(playerSelection, computerSelection))
	}

	return (playerWins > computerWins ? 'Player wins with ' +playerWins+ ' wins!' : 'Computer wins with ' +computerWins+ ' wins!')
 }
 console.log(game(5));