import GameStateData from "./GameStateData";

class GameStateDataBuilder {
    #gameStateData = null;

    constructor() {
        this.#gameStateData = new GameStateData();
    }

    setCurrentUserName(currentUserName) {
        this.#gameStateData.currentPlayerUserName = currentUserName;
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

    setPlayerOneBoardData(playerOneBoardData) {
        this.#gameStateData.playerOneBoardData = playerOneBoardData;
        return this;
    }

    setPlayerTwoBoardData(playerTwoBoardData) {
        this.#gameStateData.playerTwoBoardData = playerTwoBoardData;
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