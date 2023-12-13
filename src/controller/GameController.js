import Player from "../entities/Player";
import Ship from "../entities/Ship";
import Gameboard from "../entities/Gameboard";
import DOMController from "./DOMController";
import Coordinate from "../entities/Coordinate";
import GameStateDataBuilder from "../entities/DataPointContainers/GameStateDataBuilder";

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
    this.#DOMController = new DOMController(this.#getBundledAPI());
    this.#playerOneGameboard = new Gameboard();
    this.#playerTwoGameboard = new Gameboard();
    this.#playerOne = new Player('Player One');
    this.#playerTwo = new Player('Player Two');
    this.#currentPlayer = this.#playerOne;

    this.#updateBoard();
  }

  // Callback to let other layers of program interact with our game controller
  doBoardActionHandler(event) {
    if (this.#isGameRunning === false) return;

    const cellNode = event.target;

    if (cellNode.dataset.username !== this.#currentPlayer.getUserName()) return;

    const coordX = cellNode.dataset.coordx;
    const coordY = cellNode.dataset.coordy;

    const cellCoord = new Coordinate(coordX, coordY);
    const isHorizontal = this.#DOMController.getIsHorizontal();

    switch (this.#isRoundRunning) {
      case false: {
        this.#playerPlaceShip(cellCoord, isHorizontal);
        break;
      }
      case true: {
        this.#playerAttack(cellCoord);
        break;
      }
      default:
        break;
    }

    this.#updateBoard();
  }

  startGameHandler(event) {
    if (this.#isGameRunning === true) return false;

    this.#isGameRunning = true;

    return true;
  }

  restartRoundHandler(event) {
    this.#playerOneGameboard = new Gameboard();
    this.#playerTwoGameboard = new Gameboard();
    this.#playerOne = new Player();
    this.#playerTwo = new Player();
    this.#currentPlayer = this.#playerOne;
    this.#isPlayerOneTurn = true;

    this.#updateBoard();
  }

  #updateBoard() {
    const gameStateData = this.#getGameStateData();
    console.log("🚀 ~ file: GameController.js:89 ~ GameController ~ #updateBoard ~ gameStateData:", gameStateData)

    this.#DOMController.updateUI(gameStateData);
  }

  #getGameStateData() {
    const gameStateDataBuilder = new GameStateDataBuilder();

    const gameStateData = gameStateDataBuilder
      .setCurrentUserName(this.#currentPlayer.getUserName())
      .setIsGameRunning(this.#isGameRunning)
      .setIsRoundRunning(this.#isRoundRunning)
      .setIsPlayerOneTurn(this.#isPlayerOneTurn)
      .setPlayerOneUserName(this.#playerOne.getUserName())
      .setPlayerTwoUserName(this.#playerTwo.getUserName())
      .setPlayerOneGameboardData(this.#playerOneGameboard.getGameboardData())
      .setPlayerTwoGameboardData(this.#playerOneGameboard.getGameboardData())
      .build();

    return gameStateData;
  }

  // To check if round should start once all ships have been placed
  #runRound() {
    if (this.#playerOne.getShips().length === 5 && this.#playerTwo.getShips().length === 5) {
      console.log('round is running');
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
      console.log('win');
      return this.#playerTwo;
    }

    if (this.#playerTwoGameboard.allShipsSunk() === true) {
      console.log('win');
      return this.#playerOne;
    }

    return null;
  }

  // TODO: implement attack logic
  #playerAttack(coord) {
    this.#attackCell(coord);
    this.#switchCurrentPlayer();

    const winner = this.#getWinner();

    if (winner !== null) {
      this.#endGame(winner);
      console.log(`player ${winner} won`);
    }
  }

  #attackCell(coord) {
    if (this.#isRoundRunning === false) return false;

    let currentBoard = null;

    if (this.#isPlayerOneTurn) {
      currentBoard = this.#playerOneGameboard;
    } else {
      currentBoard = this.#playerTwoGameboard;
    }

    currentBoard.receiveAttack(coord);

    return true;
  }

  #playerPlaceShip(coord, isHorizontal) {
    this.#placeShip(coord, isHorizontal);

    this.#runRound();
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
      this.#currentPlayer.addShip(newShip);
      console.log('placed');
      console.log(`current player ships ${this.#currentPlayer.getShips().length}`);

      if (this.#currentPlayer.getShips().length === 5) {
        console.log('switch');
        this.#switchCurrentPlayer();
      }

      return true;
    }

    return false;
  }

  #getBundledAPI() {
    return {
      startGameHandler: this.startGameHandler.bind(this),
      doBoardActionHandler: this.doBoardActionHandler.bind(this),
      restartRoundHandler: this.restartRoundHandler.bind(this),
    };
  }
}

export default GameController;
