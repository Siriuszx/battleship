import GameboardData from "./GameboardData";

class GameBoardDataBuilder {
    #gameboardData = null;

    constructor() {
        this.#gameboardData = new GameboardData();
    }

    setBoardData(gameboard) {
        this.#gameboardData.setBoardData(gameboard);
        return this;
    }

    setPlayerUserName(playerUserName) {
        this.#gameboardData.playerUserName = playerUserName;
        return this;
    }

    setAllShipsSunk(allShipsSunk) {
        this.#gameboardData.allShipsSunk = allShipsSunk;
        return this;
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