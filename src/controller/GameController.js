import Player from "../entities/Player";
import Ship from "../entities/Ship";
import Gameboard from "../entities/Gameboard";
import DOMService from "./DOMController";

class GameController {
  #currentPlayer = null;

  #isGameRunning = true;

  #isRoundRunning = false;

  #isPlayerOneTurn = true;

  #playerOne = null;

  #playerTwo = null;

  #playerOneGameboard = null;

  #playerTwoGameboard = null;

  #DOMController = null;

  constructor() {
    this.#DOMController = new DOMService();
    this.#playerOneGameboard = new Gameboard();
    this.#playerTwoGameboard = new Gameboard();
    this.#playerOne = new Player();
    this.#playerTwo = new Player();
    this.#currentPlayer = this.#playerOne;
  }

  // Cb to let other layers of program interact with our game controller
  doBoardAction(coord, isHorizontal = null) {
    if (this.#isGameRunning === false) return;

    switch (this.#isRoundRunning) {
      case false: {
        this.#playerPlaceShip(coord, isHorizontal);
        break;
      }
      case true: {
        this.#playerAttack(coord);
        break;
      }
      default:
        break;
    }
  }

  #playerAttack(coord) {
    this.#attackCell(coord);

    const winner = this.#getWinner();

    if (winner !== null) {
      this.#endGame(winner);
    }
  }

  #playerPlaceShip(coord, isHorizontal) {
    this.#placeShip(coord, isHorizontal);

    // To check if round should start once all ships have been placed
    if (this.#playerOne.getShips().length === 5 &&
      this.#playerTwo.getShips().length === 5) {
      this.#isRoundRunning = true;
    }
  }

  // To let DOM start the game
  startGame() {
    if (this.#isGameRunning === true) return false;

    this.#isGameRunning = true;

    return true;
  }

  #runRound() {
    if (this.#playerOne.getShips().length === 5 && this.#playerTwo.getShips().length === 5) {
      this.#isRoundRunning = true;
      this.#isPlayerOneTurn = true;
      this.#switchCurrentPlayer();
    }
  }

  #endGame(playerWinner) {
    if (playerWinner === null) return;

    this.#isGameRunning = false;
    this.#isRoundRunning = false;
  }

  restartRound() {
    this.#playerOneGameboard = new Gameboard();
    this.#playerTwoGameboard = new Gameboard();
    this.#playerOne = new Player();
    this.#playerTwo = new Player();
    this.#currentPlayer = this.#playerOne;
    this.#isPlayerOneTurn = true;
  }

  #switchCurrentPlayer() {
    if (this.#isPlayerOneTurn) {
      this.#currentPlayer = this.#playerTwo;
    } else {
      this.#currentPlayer = this.#playerOne;
    }

    this.#isPlayerOneTurn = !this.#isPlayerOneTurn;
  }

  #getWinner() {
    if (this.#playerOneGameboard.allShipsSunk() === true) {
      return this.#playerTwo;
    }

    if (this.#playerTwoGameboard.allShipsSunk() === true) {
      return this.#playerOne;
    }

    return null;
  }

  #attackCell(coord) {
    this.#playerOneGameboard.receiveAttack(coord);
  }

  #placeShip(coord, isHorizontal) {
    if (this.#isRoundRunning) return false;

    let currentBoard = null;
    let newShip = null;
    let isPlaced = false;

    if (this.#isPlayerOneTurn) {
      currentBoard = this.#playerOneGameboard;
    } else {
      currentBoard = this.#playerTwoGameboard;
    }

    // To build ships in pre-determined pattern (5,4,3,3,2)
    switch (this.#currentPlayer.getShips().length) {
      case 0: {
        newShip = new Ship(coord, isHorizontal, 5);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 5);
        break;
      }
      case 1: {
        newShip = new Ship(coord, isHorizontal, 4);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 4);
        break;
      }
      case 2: {
        newShip = new Ship(coord, isHorizontal, 3);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 3);
        break;
      }
      case 3: {
        newShip = new Ship(coord, isHorizontal, 3);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 3);
        break;
      }
      case 4: {
        newShip = new Ship(coord, isHorizontal, 2);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 2);
        break;
      }
      default:
        return false;
    }

    // Players should take turns after building their entire fleet
    if (isPlaced) {
      if (this.#currentPlayer.getShips().length === 4) {
        this.#switchCurrentPlayer();
      }

      this.#currentPlayer.addShip(newShip);
      return true;
    }

    return false;
  }
}

export default GameController;
