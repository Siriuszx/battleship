/* eslint-disable class-methods-use-this */
import hitStatus from "../entities/HitStatus";

class DOMController {
  #boardOne = document.getElementById('board-one');

  #boardTwo = document.getElementById('board-two');

  #startGameButton = document.getElementById('start-game');

  #switchHorizontalButton = document.getElementById('horizontal-status');

  #restartGameButton = document.getElementById('restart-game');

  #boardInit = false;

  #NUMBER_OF_CELLS = 100;

  #isHorizontal = true;

  #BOARD_HEIGHT = 10;

  #BOARD_WIDTH = 10;

  constructor(controllerAPI) {
    this.#initBoard(controllerAPI.doBoardActionHandler, controllerAPI.updateBoardHitsHandler);
    this.#mapHandlers(controllerAPI);
  }

  #mapHandlers(controllerAPI) {
    this.#startGameButton.addEventListener('click', controllerAPI.startGameHandler);
    this.#switchHorizontalButton.addEventListener('click', this.#toggleHorizontal.bind(this));
    this.#restartGameButton.addEventListener('click', controllerAPI.restartRoundHandler);
  }

  #initBoard(doBoardActionHandler, updateBoardHitsHandler) {
    if (this.#boardInit === true) return;

    for (let i = 0; i < this.#NUMBER_OF_CELLS; i += 1) {
      const newBoardCellOne = this.#createBoardCell(doBoardActionHandler, updateBoardHitsHandler);
      const newBoardCellTwo = this.#createBoardCell(doBoardActionHandler, updateBoardHitsHandler);

      this.#boardOne.appendChild(newBoardCellOne);
      this.#boardTwo.appendChild(newBoardCellTwo);
    }

    this.#boardInit = true;
  }

  updateUI(gameStateData, currentCellCoord) {
    this.#updateDOMBoard(gameStateData);
    this.#highlighCellsBuilding(currentCellCoord, gameStateData.currentPlayerFleetSize, gameStateData.isRoundRunning);
  }

  #updateDOMBoard(gameStateData) {
    const gameboardOneData = gameStateData.playerOneGameboardData;
    const gameboardTwoData = gameStateData.playerTwoGameboardData;

    for (let i = 0; i < this.#NUMBER_OF_CELLS; i += 1) {
      const nodeBoardOne = this.#boardOne.childNodes[i];
      const dataBoardOne = gameboardOneData.boardData[i];

      const nodeBoardTwo = this.#boardTwo.childNodes[i];
      const dataBoardTwo = gameboardTwoData.boardData[i];

      this.#updateCellStatus(nodeBoardOne, dataBoardOne, gameStateData.isRoundRunning);
      this.#updateCellStatus(nodeBoardTwo, dataBoardTwo, gameStateData.isRoundRunning);

      this.#updateCellMetaData(nodeBoardOne, dataBoardOne, gameboardOneData.playerUserName);
      this.#updateCellMetaData(nodeBoardTwo, dataBoardTwo, gameboardTwoData.playerUserName);
    }
  }

  #toggleHorizontal() {
    this.#isHorizontal = !this.#isHorizontal;
    this.#switchHorizontalButton.classList.toggle('button-active');
  }

  #createBoardCell(doBoardActionHandler, updateBoardHitsHandler) {
    const newCell = document.createElement('div');

    newCell.classList.add('board-cell');
    newCell.addEventListener('click', doBoardActionHandler);
    newCell.addEventListener('mouseover', updateBoardHitsHandler);

    return newCell;
  }

  #updateCellMetaData(cellNode, cellData, playername) {
    const coord = cellData.getCoord();

    cellNode.setAttribute('data-coordx', coord.coordX);
    cellNode.setAttribute('data-coordy', coord.coordY);
    cellNode.setAttribute('data-playername', playername);
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

  #highlighCellsBuilding(coord, currentPlayerFleetSize, isRoundRunning) {
    if (isRoundRunning === true) return;

    const shipSizePattern = this.#getShipSizePattern(currentPlayerFleetSize);

    this.#highlightCells(coord, shipSizePattern, this.#isHorizontal);
  }

  #highlightCells(coord, shipSizePattern) {
    const isHorizontal = this.#isHorizontal;

    switch (isHorizontal) {
      case true:
        for (let i = 0; i < shipSizePattern; i += 1) {
          if ((coord.coordX + shipSizePattern) - 1 > this.#BOARD_WIDTH) break;
          const currentNode = document.querySelector(`div[data-coordx="${coord.coordX + i}"][data-coordy="${coord.coordY}"]`);
          currentNode.style.backgroundColor = '#808080';
        }
        break;
      case false:
        for (let i = 0; i < shipSizePattern; i += 1) {
          if ((coord.coordY + shipSizePattern) - 1 > this.#BOARD_HEIGHT) break;
          const currentNode = document.querySelector(`div[data-coordx="${coord.coordX}"][data-coordy="${coord.coordY + i}"]`);
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

  getIsHorizontal() { return this.#isHorizontal };
}

export default DOMController;
