let score1 = 0;
let score2 = 0;
let activePlayer = 1;
const winningScore = 20; 

const diceImage = document.getElementById('diceImage');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const score1Display = document.getElementById('score1');
const score2Display = document.getElementById('score2');
const player1Section = document.getElementById('player1');
const player2Section = document.getElementById('player2');

rollBtn.addEventListener('click', rollDice);
resetBtn.addEventListener('click', resetGame);

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `img/dice${roll}.png`;

    if (activePlayer === 1) {
        score1 += roll;
        score1Display.textContent = score1;
        if (score1 >= winningScore) {
            alert('Player 1 Wins!');
            disableGame();
            return;
        }
        activePlayer = 2;
    } else {
        score2 += roll;
        score2Display.textContent = score2;
        if (score2 >= winningScore) {
            alert('Player 2 Wins!');
            disableGame();
            return;
        }
        activePlayer = 1;
    }

    updateActivePlayer();
}

function resetGame() {
    score1 = 0;
    score2 = 0;
    activePlayer = 1;
    score1Display.textContent = score1;
    score2Display.textContent = score2;
    diceImage.src = 'img/dice1.png';
    updateActivePlayer();
    rollBtn.disabled = false;
}

function updateActivePlayer() {
    player1Section.classList.toggle('active', activePlayer === 1);
    player2Section.classList.toggle('active', activePlayer === 2);
}

function disableGame() {
    rollBtn.disabled = true;
}

