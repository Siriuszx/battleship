class GameboardData {
    #gameboardData = null;

    #playerUserName = '';

    #allShipsSunk = null;

    setGameboardData(gameboard) {
        const boardCopy = gameboard.slice();
        const boardData = [];

        boardCopy.forEach(row => {
            boardData.push(...row);
        });

        this.#gameboardData = boardData;
    }

    get gameboardData() { return this.#gameboardData; }

    get playerUserName() { return this.#playerUserName; }

    set playerUserName(playerUserName) { this.#playerUserName = playerUserName; }

    get allShipsSunk() { return this.#allShipsSunk; }

    set allShipsSunk(allShipsSunk) { this.#allShipsSunk = allShipsSunk; }
}

export default GameboardData;