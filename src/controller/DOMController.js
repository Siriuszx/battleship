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
    this.#initBoard(controllerAPI.doBoardAction);
    this.#mapHandlers(controllerAPI);
  }

  #mapHandlers(controllerAPI) {
    this.#startGameButton.addEventListener('click', controllerAPI.startGame);
    this.#switchHorizontalButton.addEventListener('click', this.#toggleHorizontal.bind(this));
    this.#restartGameButton.addEventListener('click', controllerAPI.restartRound);
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

  updateDOMBoard(boardOneData, boardTwoData) {
    for (let i = 0; i < this.#NUMBER_OF_CELLS; i += 1) {
      const nodeOne = this.#boardOne.childNodes[i];
      // console.log("🚀 ~ file: DOMController.js:42 ~ DOMController ~ updateDOMBoard ~ boardOneData:", boardOneData)
      const dataOne = boardOneData[i];

      const nodeTwo = this.#boardTwo.childNodes[i];
      const dataTwo = boardTwoData[i];

      this.#updateCellStatus(nodeOne, dataOne);
      this.#updateCellStatus(nodeTwo, dataTwo);
    }
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

  get isHorizontal() { return this.#isHorizontal };
}

export default DOMController;
