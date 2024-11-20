const wordElement = document.getElementById('word');
const textElement = document.getElementById('text');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const endGameContainer = document.getElementById('end-game-container');

let score = 0;
let time = 10;
let timeInterval;
let words = ["apple", "pear", "strawberry", "orange", "blueberry", "grape", "lemon", "kiwi", "watermelon", "banana"];

function addWordToDOM() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  wordElement.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

textElement.addEventListener('input', () => {
  const typedWord = textElement.value.trim();
  const displayedWord = wordElement.innerText;


  if (typedWord === displayedWord) {
    updateScore();
    addWordToDOM();
    textElement.value = '';
    time += 5; 
    updateTime();
  }
});


function updateTime() {
  time--;
  timeElement.innerText = time + 's';

  if (time <= 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endGameContainer.innerHTML = `
    <h1>Time's up!</h1>
    <p>Your score is ${score}</p>
    <button onclick="location.reload()">Restart Game</button>
  `;
  endGameContainer.style.display = 'block';
}

timeInterval = setInterval(updateTime, 1000);


addWordToDOM();