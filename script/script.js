const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const restartButton = document.getElementById("restart");

let secretNumber;
let attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = "";
  attemptsDisplay.textContent = "Tentativas: 0";
  guessInput.value = "";
  guessInput.disabled = false;
  submitButton.disabled = false;
  restartButton.classList.add("hidden");
}

function checkGuess() {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Digite um número entre 1 e 100!";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Tentativas: ${attempts}`;

  if (guess === secretNumber) {
    feedback.textContent = `Parabéns! Você acertou o número ${secretNumber}!`;
    guessInput.disabled = true;
    submitButton.disabled = true;
    restartButton.classList.remove("hidden");
  } else if (guess < secretNumber) {
    feedback.textContent = "Muito baixo! Tente um número maior.";
  } else {
    feedback.textContent = "Muito alto! Tente um número menor.";
  }

  guessInput.value = "";
  guessInput.focus();
}

submitButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", startGame);

startGame(); // inicia ao carregar