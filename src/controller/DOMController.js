/* eslint-disable class-methods-use-this */
import hitStatus from "../entities/HitStatus";

class DOMController {
  #BOARD_WIDTH = 10;

  #BOARD_HEIGHT = 10;

  #CELL_COUNT = 100;

  #boardPlayerOne = document.getElementById('board-one');

  #boardPlayerTwo = document.getElementById('board-two');

  #startGameButton = document.getElementById('start-game');

  #switchAxisButton = document.getElementById('horizontal-status');

  #restartGameButton = document.getElementById('restart-game');

  #boardInit = false;

  #isHorizontal = true;

  constructor(controllerAPI) {
    this.#initBoard(controllerAPI.boardActionHandler, controllerAPI.updateBoardHintsHandler);
    this.#mapHandlers(controllerAPI);
  }

  updateUI(gameStateData, currentCellCoord) {
    this.#updateBoard(gameStateData);
    this.#updateBoardFocus(gameStateData);

    if (currentCellCoord) {
      this.#highlighBuildPattern(currentCellCoord, gameStateData.currentPlayerFleetSize, gameStateData.isRoundRunning, gameStateData.currentUserName);
    }
  }

  #updateBoard(gameStateData) {
    const gameboardOneData = gameStateData.playerOneGameboardData;
    const gameboardTwoData = gameStateData.playerTwoGameboardData;

    for (let i = 0; i < this.#CELL_COUNT; i += 1) {
      const nodeBoardOne = this.#boardPlayerOne.childNodes[i];
      const dataBoardOne = gameboardOneData.boardData[i];

      const nodeBoardTwo = this.#boardPlayerTwo.childNodes[i];
      const dataBoardTwo = gameboardTwoData.boardData[i];

      this.#updateCellStatus(nodeBoardOne, dataBoardOne, gameStateData.isRoundRunning);
      this.#updateCellStatus(nodeBoardTwo, dataBoardTwo, gameStateData.isRoundRunning);

      this.#updateCellMetaData(nodeBoardOne, dataBoardOne, gameboardOneData.playerUserName);
      this.#updateCellMetaData(nodeBoardTwo, dataBoardTwo, gameboardTwoData.playerUserName);
    }
  }

  #updateBoardFocus(gameStateData) {
    if (gameStateData.isGameRunning === false) {
      this.#boardPlayerOne.classList.remove('board-active-build');
      this.#boardPlayerTwo.classList.remove('board-active-build');

      this.#boardPlayerOne.classList.remove('board-active-attack');
      this.#boardPlayerTwo.classList.remove('board-active-attack');

      return;
    }

    if (gameStateData.isRoundRunning === false) {
      switch (gameStateData.currentUserName) {
        case 'Player One':
          this.#boardPlayerOne.classList.add('board-active-build');
          this.#boardPlayerTwo.classList.remove('board-active-build');
          break;
        case 'Player Two':
          this.#boardPlayerOne.classList.remove('board-active-build');
          this.#boardPlayerTwo.classList.add('board-active-build');
          break;
        default:
          break;
      }
    }

    if (gameStateData.isRoundRunning === true) {
      this.#boardPlayerOne.classList.remove('board-active-build');
      this.#boardPlayerTwo.classList.remove('board-active-build');

      switch (gameStateData.currentUserName) {
        case 'Player One':
          this.#boardPlayerOne.classList.remove('board-active-attack');
          this.#boardPlayerTwo.classList.add('board-active-attack');
          break;
        case 'Player Two':
          this.#boardPlayerOne.classList.add('board-active-attack');
          this.#boardPlayerTwo.classList.remove('board-active-attack');
          break;
        default:
          break;
      }
    }
  }

  // #region Board Initialization

  #mapHandlers(controllerAPI) {
    this.#startGameButton.addEventListener('click', controllerAPI.startGameHandler);
    this.#switchAxisButton.addEventListener('click', this.#toggleHorizontal.bind(this));
    this.#restartGameButton.addEventListener('click', controllerAPI.restartRoundHandler);
  }

  #initBoard(boardActionHandler, updateBoardHintsHandler) {
    if (this.#boardInit === true) return;

    for (let i = 0; i < this.#CELL_COUNT; i += 1) {
      const newBoardCellOne = this.#createCell(boardActionHandler, updateBoardHintsHandler);
      const newBoardCellTwo = this.#createCell(boardActionHandler, updateBoardHintsHandler);

      this.#boardPlayerOne.appendChild(newBoardCellOne);
      this.#boardPlayerTwo.appendChild(newBoardCellTwo);
    }

    this.#boardInit = true;
  }

  // #endregion

  // #region Cell Creation/StatusMutation

  #createCell(boardActionHandler, updateBoardHintsHandler) {
    const newCell = document.createElement('div');

    newCell.classList.add('board-cell');
    newCell.addEventListener('click', boardActionHandler);
    newCell.addEventListener('mouseover', updateBoardHintsHandler);

    return newCell;
  }

  #updateCellMetaData(cellNode, cellData, playerName) {
    const coord = cellData.getCoord();

    cellNode.setAttribute('data-coordx', coord.coordX);
    cellNode.setAttribute('data-coordy', coord.coordY);
    cellNode.setAttribute('data-playername', playerName);
  }

  #updateCellStatus(cellNode, cellData, isRoundRunning) {
    if (!cellNode || !cellData) return;

    const node = cellNode;
    const data = cellData;

    const status = data.getHitStatus();

    switch (status) {
      case hitStatus().NOT_HIT: {
        node.style.backgroundColor = '#FFFFFF';
        break;
      }
      case hitStatus().HIT_SHIP: {
        node.style.backgroundColor = '#FF0000';
        break;
      }
      case hitStatus().HIT_CELL: {
        node.style.backgroundColor = '#808080';
        break;
      }
      default:
        break;
    }

    if (cellData.isOccupied && isRoundRunning === false) node.style.backgroundColor = '#000';
  }

  // #endregion

  // #region Cell Building Path Hinting

  #highlighBuildPattern(coord, currentPlayerFleetSize, isRoundRunning, currentPlayerName) {
    const shipSizePattern = this.#getShipSizePattern(currentPlayerFleetSize);

    this.#highlightCells(coord, shipSizePattern, currentPlayerName);
  }

  #highlightCells(coord, shipSizePattern, currentPlayerName) {
    const isHorizontal = this.#isHorizontal;

    switch (isHorizontal) {
      case true:
        for (let i = 0; i < shipSizePattern; i += 1) {
          if ((coord.coordX + shipSizePattern) - 1 > this.#BOARD_WIDTH) break;
          const currentNode = document.querySelector(`div[data-coordx="${coord.coordX + i}"][data-coordy="${coord.coordY}"][data-playername="${currentPlayerName}"]`);
          currentNode.style.backgroundColor = '#808080';
        }
        break;
      case false:
        for (let i = 0; i < shipSizePattern; i += 1) {
          if ((coord.coordY + shipSizePattern) - 1 > this.#BOARD_HEIGHT) break;
          const currentNode = document.querySelector(`div[data-coordx="${coord.coordX}"][data-coordy="${coord.coordY + i}"][data-playername="${currentPlayerName}"]`);
          currentNode.style.backgroundColor = '#808080';
        }
        break;
      default:
        break;
    }
  }

  #getShipSizePattern(currentPlayerFleetSize) {
    switch (currentPlayerFleetSize) {
      case 0:
        return 5;
      case 1:
        return 4;
      case 2:
      case 3:
        return 3;
      case 4:
        return 2;
      default:
        return 0;
    }
  }

  // #endregion

  #toggleHorizontal() {
    this.#isHorizontal = !this.#isHorizontal;
    this.#switchAxisButton.classList.toggle('button-active');
  }

  getIsHorizontal() { return this.#isHorizontal };
}

export default DOMController;
