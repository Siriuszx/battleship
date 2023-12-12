class DOMService {
  #boardOne = document.getElementById('board-one');
  
  #boardTwo = document.getElementById('board-two');

  #boardInit = false;

  constructor() {
    this.initBoard();
  }

  initBoard() {
    if(this.#boardInit === true) return;

    
    for(let i = 0; i < 100; i += 1) {
      const newBoardCellOne = document.createElement('div');
      const newBoardCellTwo = document.createElement('div');
      newBoardCellOne.classList.add('board-cell');
      newBoardCellTwo.classList.add('board-cell');
      
      this.#boardOne.appendChild(newBoardCellOne);
      this.#boardTwo.appendChild(newBoardCellTwo);
    }

    this.#boardInit = true;
  }

  updateBoard(boardOneData, boardTwoData) {
    
  }
}

export default DOMService;
