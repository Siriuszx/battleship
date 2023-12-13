import Player from "../entities/Player";
import Ship from "../entities/Ship";
import Gameboard from "../entities/Gameboard";
import DOMController from "./DOMController";
import Coordinate from "../entities/Coordinate";
import GameStateDataBuilder from "../entities/DataPointContainers/GameStateDataBuilder";

class GameController {
  #currentPlayer = null;

  #isGameRunning = false;

  #isRoundRunning = false;

  #isPlayerOneTurn = true;

  #playerOne = null;

  #playerTwo = null;

  #playerOneGameboard = null;

  #playerTwoGameboard = null;

  #DOMController = null;

  constructor() {
    this.#DOMController = new DOMController(this.#getAPIContainer());
    this.#playerOneGameboard = new Gameboard();
    this.#playerTwoGameboard = new Gameboard();
    this.#playerOne = new Player('Player One');
    this.#playerTwo = new Player('Player Two');
    this.#currentPlayer = this.#playerOne;

    this.#updateGameUI();
  }

  // Callback to let other layers of program interact with our game controller
  doBoardActionHandler(event) {
    if (this.#isGameRunning === false) return;

    const cellNode = event.target;

    const isCellOwner = cellNode.dataset.playername === this.#currentPlayer.getPlayerName();
    const isHorizontal = this.#DOMController.getIsHorizontal();
    
    const coordX = cellNode.dataset.coordx;
    const coordY = cellNode.dataset.coordy;
    const cellCoord = new Coordinate(coordX, coordY);
    
    switch (this.#isRoundRunning) {
      case false: {
        // to let player place ships on HIS OWN board only
        if (isCellOwner === false) return;
        this.#playerPlaceShip(cellCoord, isHorizontal);
        break;
      }
      case true: {
        // to let player attack ships on HIS OPPONENT'S board only
        if (isCellOwner === true) return;
        this.#playerAttack(cellCoord);
        break;
      }
      default:
        break;
    }

    this.#updateGameUI();
    console.log('ACTION');
  }

  #updateGameUI(currentCellCoord) {
    const gameStateData = this.#getGameStateData();

    this.#DOMController.updateUI(gameStateData, currentCellCoord);
  }

  #updateBoardHitsHandler(event) {
    const cellNode = event.target;

    const coordX = cellNode.dataset.coordx;
    const coordY = cellNode.dataset.coordy;

    const currentCellCoord = new Coordinate(coordX, coordY);

    this.#updateGameUI(currentCellCoord);
  }

  startGameHandler(event) {
    if (this.#isGameRunning === true) return false;
    console.log('START');
    this.#isGameRunning = true;

    return true;
  }

  restartRoundHandler(event) {
    this.#isGameRunning = false;
    this.#isRoundRunning = false;
    this.#playerOneGameboard = new Gameboard();
    this.#playerTwoGameboard = new Gameboard();
    this.#playerOne = new Player('Player One');
    this.#playerTwo = new Player('Player Two');
    this.#currentPlayer = this.#playerOne;
    this.#isPlayerOneTurn = true;

    this.#updateGameUI();
    console.log('RESTARTED');
  }

  #getGameStateData() {
    const gameStateDataBuilder = new GameStateDataBuilder();

    const gameStateData = gameStateDataBuilder
      .setCurrentUserName(this.#currentPlayer.getPlayerName())
      .setIsGameRunning(this.#isGameRunning)
      .setIsRoundRunning(this.#isRoundRunning)
      .setIsPlayerOneTurn(this.#isPlayerOneTurn)
      .setPlayerOneUserName(this.#playerOne.getPlayerName())
      .setPlayerTwoUserName(this.#playerTwo.getPlayerName())
      .setPlayerOneGameboardData(this.#playerOneGameboard.getGameboardData(this.#playerOne.getPlayerName()))
      .setPlayerTwoGameboardData(this.#playerTwoGameboard.getGameboardData(this.#playerTwo.getPlayerName()))
      .setPlayerOneFleetSize(this.#playerOne.fleetSize)
      .setPlayerTwoFleetSize(this.#playerTwo.fleetSize)
      .setCurrentPlayerFleetSize(this.#currentPlayer.fleetSize)
      .build();

    return gameStateData;
  }

  // To check if round should start once all ships have been placed
  #runRound() {
    if (this.#playerOne.getShips().length === 5 && this.#playerTwo.getShips().length === 5) {
      console.log('round is running');
      this.#isRoundRunning = true;
      this.#isPlayerOneTurn = true;
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
      console.log('PLAYER TWO TURN');
    } else {
      this.#currentPlayer = this.#playerOne;
      console.log('PLAYER ONE TURN');
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
      currentBoard = this.#playerTwoGameboard;
    } else {
      currentBoard = this.#playerOneGameboard;
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

  #getAPIContainer() {
    return {
      startGameHandler: this.startGameHandler.bind(this),
      doBoardActionHandler: this.doBoardActionHandler.bind(this),
      restartRoundHandler: this.restartRoundHandler.bind(this),
      updateBoardHitsHandler: this.#updateBoardHitsHandler.bind(this),
    };
  }
}

export default GameController;
