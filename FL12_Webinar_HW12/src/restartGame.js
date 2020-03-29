import {currentPlayerTurn} from "./game";

function restartGame () {
    const statusDisplay = document.querySelector('.game-status');
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    location.reload();
}
export {restartGame}