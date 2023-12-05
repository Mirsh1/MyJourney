const answers = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

function generateComputerAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

function playGame(playerChoice) {
  const computerChoice = generateComputerAnswer();

  document.getElementById("playerChoice").textContent = `Player chose: ${playerChoice}`;
  document.getElementById("computerChoice").textContent = `Computer chose: ${computerChoice}`;

  const result = calculateResult(playerChoice, computerChoice);

  document.getElementById("result").textContent = `Result: ${result}`;

  document.getElementById("resultBox").style.display = "block";

  // Update the score based on the result
  liveScore(result);
}

function calculateResult(playerChoice, computerChoice) {
  if (playerChoice === 'Rock' && computerChoice === 'Scissors') return 'Player wins';
  if (playerChoice === 'Paper' && computerChoice === 'Rock') return 'Player wins';
  if (playerChoice === 'Scissors' && computerChoice === 'Paper') return 'Player wins';

  if (playerChoice === computerChoice) return 'Draw';

  return 'Computer wins';
}

function liveScore(result) {
  let x = document.getElementById("playerScore");
  let y = document.getElementById("computerScore");

  if (result === 'Player wins') {
    playerScore++;
    x.textContent = `Player Score: ${playerScore}`;
  }

  if (result === 'Computer wins') {
    computerScore++;
    y.textContent = `Computer Score: ${computerScore}`;
  }
}

// Add this line to initialize the score display
liveScore("initialization");
