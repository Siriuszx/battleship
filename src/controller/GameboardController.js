import BoardCell from "../entities/BoardCell";
import Ship from "../entities/Ship";

class GameboardController {
    #width = 10;

    #height = 10;

    #board = [];

    #shipList = [];

    constructor() {
        this.#initBoard();
    }

    placeShip(coordStart, isHorizontal, length) {
        if (!this.#canPlace(coordStart, isHorizontal, length)) return false;

        const newShip = new Ship(coordStart, isHorizontal, length);

        this.#shipList.push(newShip);

        if (isHorizontal === true) {
            for (let i = 0; i < length; i += 1) {
                const boardCell = this.#board[(coordStart.coordX - 1) + i][coordStart.coordY - 1];
                boardCell.occupy(newShip);
            }
        } else {
            for (let i = 0; i < length; i += 1) {
                const boardCell = this.#board[coordStart.coordX - 1][(coordStart.coordY - 1) + i];
                boardCell.occupy(newShip);
            }
        }

        return true;
    }

    receiveAttack(coord) {
        return this.#board[coord.coordX - 1][coord.coordY - 1].hit();
    }

    allShipsSunk() {
        return this.#shipList.every(ship => ship.isSunk());
    }

    getBoardData() {
        const boardStateCopy = this.#board.slice();

        return boardStateCopy;
    }

    #canPlace(coordStart, isHorizontal, length) {
        switch (isHorizontal) {
            case true: {
                if (coordStart.coordX + length > this.#width) {
                    return false;
                }

                for (let i = 0; i < length; i += 1) {
                    const boardCell = this.#board[(coordStart.coordX - 1) + i][coordStart.coordY - 1];

                    if (boardCell.isOccupied === true) {
                        return false;
                    }
                }

                return true;
            }
            case false: {
                if (coordStart.coordY + length > this.#height) {
                    return false;
                }

                for (let i = 0; i < length; i += 1) {
                    const boardCell = this.#board[coordStart.coordX - 1][(coordStart.coordY - 1) + i];

                    if (boardCell.isOccupied === true) {
                        return false;
                    }
                }

                return true;
            }
            default:
                return false;
        }
    }

    #initBoard() {
        if (this.#board.length !== 0) return;

        for (let i = 0; i < this.#width; i += 1) {
            this.#board.push([]);

            for (let j = 0; j < this.#height; j += 1) {
                const emptyCell = new BoardCell(i + 1, j + 1);

                this.#board[i].push(emptyCell);
            }
        }
    }
}

export default GameboardController;
