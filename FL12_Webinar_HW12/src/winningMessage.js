import {currentPlayer} from "./game";

export const winningMessage = function () {
    return `Player ${ currentPlayer } has won the game!`;
};