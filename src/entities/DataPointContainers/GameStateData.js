class GameStateData {
    #currentPlayerUserName;

    #isGameRunning;

    #isRoundRunning;

    #isPlayerOneTurn;

    #playerOneUserName;

    #playerTwoUserName;

    #playerOneGameboardData;

    #playerTwoGameboardData;

    get currentUserName() { return this.#currentPlayerUserName; }

    set currentUserName(currentUserName) { this.#currentPlayerUserName = currentUserName; }

    get isGameRunning() { return this.#isGameRunning; }

    set isGameRunning(isGameRunning) { this.#isGameRunning = isGameRunning; }

    get isRoundRunning() { return this.#isRoundRunning; }

    set isRoundRunning(isRoundRunning) { this.#isRoundRunning = isRoundRunning; }

    get isPlayerOneTurn() { return this.#isPlayerOneTurn; }

    set isPlayerOneTurn(isPlayerOneTurn) { this.#isPlayerOneTurn = isPlayerOneTurn; }

    get playerOneUserName() { return this.#playerOneUserName; }

    set playerOneUserName(playerOneUserName) { this.#playerOneUserName = playerOneUserName; }

    get playerTwoUserName() { return this.#playerTwoUserName; }

    set playerTwoUserName(playerTwoUserName) { this.#playerTwoUserName = playerTwoUserName; }

    get playerOneGameboardData() { return this.#playerOneGameboardData; }

    set playerOneGameboardData(playerOneGameboardData) { this.#playerOneGameboardData = playerOneGameboardData; }

    get playerTwoGameboardData() { return this.#playerTwoGameboardData; }

    set playerTwoGameboardData(playerTwoGameboardData) { this.#playerTwoGameboardData = playerTwoGameboardData; }
}

export default GameStateData;