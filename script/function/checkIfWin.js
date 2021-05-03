// Vérifier si le joueur a gagner et changer de joueur 
function checkIfWin() {

    if (scores[activePlayer] >= 100) {
        alert('Victoire du joueur ' + playerNumber[activePlayer]);
        newGame();
        return true;
    } else {
        nextPlayer();
    }
}
