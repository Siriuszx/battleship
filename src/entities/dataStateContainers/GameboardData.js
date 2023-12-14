class GameboardData {
    #boardData = null;

    #playerUserName = '';

    #allShipsSunk = null;

    setBoardData(board) {
        const boardCopy = board.slice();
        const boardData = [];

        boardCopy.forEach(row => {
            boardData.push(...row);
        });

        this.#boardData = boardData;
    }

    get boardData() { return this.#boardData; }

    get playerUserName() { return this.#playerUserName; }

    set playerUserName(playerUserName) { this.#playerUserName = playerUserName; }

    get allShipsSunk() { return this.#allShipsSunk; }

    set allShipsSunk(allShipsSunk) { this.#allShipsSunk = allShipsSunk; }
}

export default GameboardData;