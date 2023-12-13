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

  constructor(controllerAPI) {
    this.#initBoard(controllerAPI.doBoardActionHandler);
    this.#mapHandlers(controllerAPI);
  }

  #mapHandlers(controllerAPI) {
    this.#startGameButton.addEventListener('click', controllerAPI.startGameHandler);
    this.#switchHorizontalButton.addEventListener('click', this.#toggleHorizontal.bind(this));
    this.#restartGameButton.addEventListener('click', controllerAPI.restartRoundHandler);
  }

  #initBoard(doBoardActionHandler) {
    if (this.#boardInit === true) return;

    for (let i = 0; i < this.#NUMBER_OF_CELLS; i += 1) {
      const newBoardCellOne = this.#createBoardCell(doBoardActionHandler);
      const newBoardCellTwo = this.#createBoardCell(doBoardActionHandler);

      this.#boardOne.appendChild(newBoardCellOne);
      this.#boardTwo.appendChild(newBoardCellTwo);
    }

    this.#boardInit = true;
  }

  updateUI(gameStateData) {
    this.#updateDOMBoard(
      gameStateData.playerOneGameboardData,
      gameStateData.playerTwoGameboardData
    );
  }

  #updateDOMBoard(gameboardOneData, gameboardTwoData) {
    for (let i = 0; i < this.#NUMBER_OF_CELLS; i += 1) {
      const nodeBoardOne = this.#boardOne.childNodes[i];
      const dataBoardOne = gameboardOneData.boardData[i];

      const nodeBoardTwo = this.#boardTwo.childNodes[i];
      const dataBoardTwo = gameboardTwoData.boardData[i];

      this.#updateCellStatus(nodeBoardOne, dataBoardOne);
      this.#updateCellStatus(nodeBoardTwo, dataBoardTwo);

      this.#updateCellMetaData(nodeBoardOne, dataBoardOne, gameboardOneData.playerUserName);
      this.#updateCellMetaData(nodeBoardTwo, dataBoardTwo, gameboardTwoData.playerUserName);
    }
  }

  #updateGameStatus(gameStateData) {

  }

  #toggleHorizontal() {
    this.#isHorizontal = !this.#isHorizontal;
    this.#switchHorizontalButton.classList.toggle('button-active');
  }

  #createBoardCell(doBoardActionHandler) {
    const newCell = document.createElement('div');

    newCell.classList.add('board-cell');
    newCell.addEventListener('click', doBoardActionHandler);

    return newCell;
  }

  #updateCellMetaData(cellNode, cellData, playername) {
    const coord = cellData.getCoord();

    cellNode.setAttribute('data-coordx', coord.coordX);
    cellNode.setAttribute('data-coordy', coord.coordY);
    cellNode.setAttribute('data-playername', playername);
  }

  #updateCellStatus(cellNode, cellData) {
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
  }

  getIsHorizontal() { return this.#isHorizontal };
}

export default DOMController;
