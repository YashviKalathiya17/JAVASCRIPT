function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
    

  // Set images
  document.getElementById('player-choice').innerHTML =
    `<img src="${playerChoice}.png" alt="${playerChoice}">`;

  document.getElementById('computer-choice').innerHTML =
    `<img src="${computerChoice}.png" alt="${computerChoice}">`;

  // Determine result
  let result = '';
  if (playerChoice === computerChoice) {        
    result = "It's a Draw! 😐";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "🎉 You Win!";
  } else {
    result = "💻 Computer Wins!";
  }

  document.getElementById('result').textContent = result;
}
