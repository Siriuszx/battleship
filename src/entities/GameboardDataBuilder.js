import GameboardData from "./GameboardData";

class GameBoardDataBuilder {
    #gameboardData = null;

    constructor() {
        this.#gameboardData = new GameboardData();
    }

    setGameboardData(gameBoard) {
        this.#gameboardData.setGameboardData(gameBoard);
        return this;
    }

    setPlayerUserName(playerUserName) {
        this.#gameboardData.playerUserName = playerUserName;
        return this;
    }

    setAllShipsSunk(allShipsSunk) {
        this.#gameboardData.allShipsSunk = allShipsSunk;
    }

    #reset() {
        this.#gameboardData = new GameboardData();
    }

    build() {
        const gameboardData = this.#gameboardData;
        this.#reset();
        return gameboardData;
    }
}

export default GameBoardDataBuilder;