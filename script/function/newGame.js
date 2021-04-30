// Remettre à zéro les variables pour une nouvelle partie
function newGame() {
    scores = [0, 0];
    currentScores = [0, 0];
    activePlayer = 0;
    diceScore = 0;
    inGame = true;
    playerNumber = [1, 2];

    document.getElementById('img-result').src = 'images/1.png';
    document.getElementById('score-player-1').textContent = 0;
    document.getElementById('score-player-2').textContent = 0;
    document.getElementById('dice-result-1').textContent = 0;
    document.getElementById('dice-result-2').textContent = 0;
    document.getElementById('select-player-1').style.display = 'inline-block';
    document.getElementById('select-player-2').style.display = 'none';
}
