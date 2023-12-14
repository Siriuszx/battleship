import GameStateData from "./GameStateData";

class GameStateDataBuilder {
    #gameStateData = null;

    constructor() {
        this.#gameStateData = new GameStateData();
    }

    setCurrentUserName(currentUserName) {
        this.#gameStateData.currentUserName = currentUserName;
        return this;
    }

    setIsGameRunning(isGameRunning) {
        this.#gameStateData.isGameRunning = isGameRunning;
        return this;
    }

    setIsRoundRunning(isRoundRunning) {
        this.#gameStateData.isRoundRunning = isRoundRunning;
        return this;
    }

    setIsPlayerOneTurn(isPlayerOneTurn) {
        this.#gameStateData.isPlayerOneTurn = isPlayerOneTurn;
        return this;
    }

    setPlayerOneUserName(playerOneUserName) {
        this.#gameStateData.playerOneUserName = playerOneUserName;
        return this;
    }

    setPlayerTwoUserName(playerTwoUserName) {
        this.#gameStateData.playerTwoUserName = playerTwoUserName;
        return this;
    }

    setPlayerOneGameboardData(playerOneGameboardData) {
        this.#gameStateData.playerOneGameboardData = playerOneGameboardData;
        return this;
    }

    setPlayerTwoGameboardData(playerTwoGameboardData) {
        this.#gameStateData.playerTwoGameboardData = playerTwoGameboardData;
        return this;
    }

    setPlayerOneFleetSize(playerOneFleetSize) {
        this.#gameStateData.playerOneFleetSize = playerOneFleetSize;
        return this;
    }

    setPlayerTwoFleetSize(playerTwoFleetSize) {
        this.#gameStateData.playerTwoFleetSize = playerTwoFleetSize;
        return this;
    }

    setCurrentPlayerFleetSize(currentPlayerFleetSize) {
        this.#gameStateData.currentPlayerFleetSize = currentPlayerFleetSize;
        return this;
    }

    reset() {
        this.#gameStateData = new GameStateData();
    }

    build() {
        const gameStateData = this.#gameStateData;
        this.reset();
        return gameStateData;
    }
}

export default GameStateDataBuilder;