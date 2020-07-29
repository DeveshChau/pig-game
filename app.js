let currentScore, score, activePlayer, gameState;
function init() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    currentScore = 0;
    score = [0, 0];
    activePlayer = 0;
    gameState = true;
}
function changePlayer() {
    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');
    document.getElementById(`current-${activePlayer}`).textContent = '0';
    currentScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
}
init();
document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameState) {
        let dice = Math.floor(Math.random() * 6) + 1
        let element = document.querySelector('.dice');
        element.src = `dice-${dice}.png`;
        element.style.display = 'block';
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        } else {
            changePlayer();
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameState) {
        score[activePlayer] += currentScore;
        document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];
        if (score[activePlayer] >= 100) {
            gameState = false;
            document.querySelector('.dice').style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.getElementById(`name-${activePlayer}`).textContent = 'Winner';
        } else {
            changePlayer()
        }
    }
})
