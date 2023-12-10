import BoardCell from "./BoardCell";
import Ship from "./Ship";

class Gameboard {
    #width = 10;

    #height = 10;

    board = [];

    constructor() {
        this.#init();
    }

    placeShip(coordStart, horizontal, length) {
        if (!this.#canPlace(coordStart, horizontal, length)) return false;

        const newShip = new Ship(coordStart, horizontal, length);

        if (horizontal === true) {
            for (let i = 0; i < length; i += 1) {
                const boardCell = this.board[(coordStart.coordX - 1) + i][coordStart.coordY - 1];
                boardCell.occupy(newShip);
            }
        } else {
            for (let i = 0; i < length; i += 1) {
                const boardCell = this.board[coordStart.coordX - 1][(coordStart.coordY - 1) + i];
                boardCell.occupy(newShip);
            }
        }

        return true;
    }

    receiveAttack(coord) {
        return this.board[coord.coordX - 1][coord.coordY - 1].hit();
    }

    #canPlace(coordStart, horizontal, length) {
        if (horizontal === true) {
            if (coordStart.coordX + length > this.#width)
                return false;
        }

        if (horizontal === false) {
            if (coordStart.coordY + length > this.#height)
                return false;
        }

        if (horizontal === true) {
            for (let i = 0; i < length; i += 1) {
                if (this.board[(coordStart.coordX - 1) + i][coordStart.coordY - 1].occupied === true) {
                    return false;
                }
            }
        }

        if (horizontal === false) {
            for (let i = 0; i < length; i += 1) {
                if (this.board[coordStart.coordX - 1][(coordStart.coordY - 1) + i].occupied === true) {
                    return false;
                }
            }
        }

        return true;
    }

    #init() {
        if (this.board.length !== 0) return;

        for (let i = 0; i < this.#width; i += 1) {
            this.board.push([]);
            for (let j = 0; j < this.#height; j += 1) {
                const emptyCell = new BoardCell(i + 1, j + 1);

                this.board[i].push(emptyCell);
            }
        }
    }
}

export default Gameboard;
