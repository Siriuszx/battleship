import Player from "../entities/Player";
import Ship from "../entities/Ship";
import Gameboard from "../entities/Gameboard";
import DOMController from "./DOMController";
import Coordinate from "../entities/Coordinate";
import GameStateDataBuilder from "../entities/dataStateContainers/GameStateDataBuilder";

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

  #lastComputerHitCoord = null;

  constructor() {
    this.#DOMController = new DOMController(this.#getAPIContainer());
    this.#playerOneGameboard = new Gameboard();
    this.#playerTwoGameboard = new Gameboard();
    this.#playerOne = new Player('Player One');
    this.#playerTwo = new Player('Player Two');
    this.#currentPlayer = this.#playerOne;
    this.#lastComputerHitCoord = new Coordinate(-1, -1);

    this.#updateGameUI();
  }

  // Callback to let other layers of program interact with our game controller
  #boardActionHandler(event) {
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
        this.#placeShipHandler(cellCoord, isHorizontal);
        break;
      }
      case true: {
        // to let player attack ships on HIS OPPONENT'S board only
        if (isCellOwner === true) return;
        this.#attackHandler(cellCoord);
        break;
      }
      default:
        break;
    }

    console.log(this.#DOMController.isComputerEnabled);
    if (this.#DOMController.isComputerEnabled === true && this.#isPlayerOneTurn === false) {
      this.#computerActionHandler();
    }

    this.#updateGameUI(cellCoord);
  }

  #enableComputerHandler() {
    this.#restartRoundHandler();
  }

  #computerActionHandler() {
    if (this.#isGameRunning === false) return;

    if (this.#isRoundRunning === true) {
      this.#computerAttack();
    } else {
      this.#computerBuildFleet();
    }
  }

  #computerAttack() {
    let rndCoord = this.#getRandomCoord();
    let result = false;

    let isRepeatedCell = this.#isRepeatedCell(rndCoord); 

    while (isRepeatedCell) {
      rndCoord = this.#getRandomCoord();
      isRepeatedCell = this.#isRepeatedCell(rndCoord);
    }

    result = this.#attackHandler(rndCoord);

    this.#lastComputerHitCoord = rndCoord;

    console.log(`RND X: ${rndCoord.coordX} RND Y: ${rndCoord.coordY}`);
    console.log(`RESULT: ${result}`);
  }

  #computerBuildFleet() {
    let rndCoord = null;
    let rndIsHorizontal = false;

    let result = false;

    while (this.#currentPlayer.fleetSize !== 5) {
      rndCoord = this.#getRandomCoord();

      rndIsHorizontal = Boolean(Math.round(Math.random()));
      result = this.#placeShipHandler(rndCoord, rndIsHorizontal);

      console.log(`RND X: ${rndCoord.coordX} RND Y: ${rndCoord.coordY}`);
      console.log(`RESULT: ${result}`);
    }
  }

  #getRandomCoord() {
    const rndX = Math.floor(Math.random() * this.#playerTwoGameboard.width + 1);
    const rndY = Math.floor(Math.random() * this.#playerTwoGameboard.height + 1);

    const rndCoord = new Coordinate(rndX, rndY);

    return rndCoord;
  }

  #isRepeatedCell(coord) {
    return this.#currentPlayer.getHitLog()
    .some((currentCoord) => (coord.coordX === currentCoord.coordX) && (coord.coordY === currentCoord.coordY));
  }

  #startGameHandler() {
    if (this.#isGameRunning === true) return;

    this.#isGameRunning = true;

    this.#updateGameUI();
  }

  #restartRoundHandler() {
    this.#isGameRunning = false;
    this.#isRoundRunning = false;
    this.#playerOneGameboard = new Gameboard();
    this.#playerTwoGameboard = new Gameboard();
    this.#playerOne = new Player('Player One');
    this.#playerTwo = new Player('Player Two');
    this.#currentPlayer = this.#playerOne;
    this.#isPlayerOneTurn = true;

    this.#updateGameUI();
  }

  #updateGameUI(currentCellCoord) {
    const gameStateData = this.#getGameStateData();

    this.#DOMController.updateUI(gameStateData, currentCellCoord);
  }

  #updateBoardHintsHandler(event) {
    const cellNode = event.target;

    if (cellNode.dataset.playername !== this.#currentPlayer.getPlayerName()) return;

    const coordX = cellNode.dataset.coordx;
    const coordY = cellNode.dataset.coordy;

    const currentCellCoord = new Coordinate(coordX, coordY);

    this.#updateGameUI(currentCellCoord);
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
  #startRound() {
    if (this.#playerOne.getShips().length === 5 && this.#playerTwo.getShips().length === 5) {
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

  #attackHandler(coord) {
    const attackResult = this.#attackCell(coord);
    this.#switchCurrentPlayer();

    const winner = this.#getWinner();

    if (winner !== null) {
      this.#endGame(winner);
      console.log(`player ${winner.getPlayerName()} won`);
    }

    return attackResult;
  }

  #attackCell(coord) {
    if (this.#isRoundRunning === false) return false;

    let currentBoard = null;

    if (this.#isPlayerOneTurn) {
      currentBoard = this.#playerTwoGameboard;
    } else {
      currentBoard = this.#playerOneGameboard;
    }

    this.#currentPlayer.logHit(coord);
    currentBoard.receiveAttack(coord);

    return true;
  }

  #placeShipHandler(coord, isHorizontal) {
    const result = this.#placeShip(coord, isHorizontal);

    this.#startRound();

    return result;
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
        break;
    }

    // Players should take turns after building their entire fleet
    if (isPlaced) {
      this.#currentPlayer.addShip(newShip);

      if (this.#currentPlayer.getShips().length === 5) {
        this.#switchCurrentPlayer();
      }

      return true;
    }
    console.log(`isPlaced: ${isPlaced}`);

    return false;
  }

  #getAPIContainer() {
    return {
      startGameHandler: this.#startGameHandler.bind(this),
      boardActionHandler: this.#boardActionHandler.bind(this),
      restartRoundHandler: this.#restartRoundHandler.bind(this),
      updateBoardHintsHandler: this.#updateBoardHintsHandler.bind(this),
      enableComputerHandler: this.#enableComputerHandler.bind(this)
    };
  }
}

export default GameController;
