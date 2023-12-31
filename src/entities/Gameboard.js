import BoardCell from "./BoardCell";
import GameboardDataBuilder from "./dataStateContainers/GameboardDataBuilder";

class Gameboard {
    #width = 10;

    #height = 10;

    #board = [];

    // swapping supposedly X and Y coordinates here because of failed attempt to implement 2D arrays in JavaScript...
    #shipList = [];

    constructor() {
        this.#initBoard();
    }

    placeShip(ship, isHorizontal, length) {
        if (!this.#canPlace(ship.getCoordStart(), isHorizontal, length)) return false;
        this.#shipList.push(ship);

        if (isHorizontal === true) {
            for (let i = 0; i < length; i += 1) {
                const boardCell = this.#board[ship.getCoordStart().coordY - 1][(ship.getCoordStart().coordX - 1) + i];
                boardCell.occupy(ship);
            }
        } else {
            for (let i = 0; i < length; i += 1) {
                const boardCell = this.#board[(ship.getCoordStart().coordY - 1) + i][ship.getCoordStart().coordX - 1];
                boardCell.occupy(ship);
            }
        }

        return true;
    }

    receiveAttack(coord) {
        return this.#board[coord.coordY - 1][coord.coordX - 1].hit();
    }
    
    getGameboardData(playerUserName) {
        const gameboardDataBuilder = new GameboardDataBuilder();

        const gameboardData = gameboardDataBuilder.setBoardData(this.#board)
        .setPlayerUserName(playerUserName)
        .setAllShipsSunk(this.allShipsSunk())
        .build();
        
        return gameboardData;
    }
    
    allShipsSunk() {
        return this.#shipList.every(ship => ship.isSunk());
    }
    
    #canPlace(coordStart, isHorizontal, length) {
        switch (isHorizontal) {
            case true: {
                // to exclude starting point from calculation
                if ((coordStart.coordX - 1) + length > this.#width) {
                    return false;
                }

                for (let i = 0; i < length; i += 1) {
                    const boardCell = this.#board[coordStart.coordY - 1][(coordStart.coordX - 1) + i];

                    if (boardCell.isOccupied === true) {
                        return false;
                    }
                }

                return true;
            }
            case false: {
                // to exclude starting point from calculation
                if ((coordStart.coordY - 1) + length > this.#height) {
                    return false;
                }

                for (let i = 0; i < length; i += 1) {
                    const boardCell = this.#board[(coordStart.coordY - 1) + i][coordStart.coordX - 1];

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

        for (let x = 0; x < this.#width; x += 1) {
            this.#board.push([]);

            for (let y = 0; y < this.#height; y += 1) {
                // swapping values due to wrong cell data representation
                const emptyCell = new BoardCell(y + 1, x + 1);

                this.#board[x].push(emptyCell);
            }
        }
    }

    get width() { return this.#width};

    get height() { return this.#height};
}

export default Gameboard;
