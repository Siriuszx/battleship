import ShipPiece from "./ShipPiece";

class Ship {
  #timesHit = 0;

  #shipPieces = [];

  constructor(length, coordStart, defaultDirection) {
    this.#buildShip(coordStart, defaultDirection, length);
  }

  tryHit(hitCoord) {
    const shipPiece = this.#shipPieces.find(pieceCoord =>
      (pieceCoord.coordX === hitCoord.coordX) && (pieceCoord.coordY === hitCoord.coordY)
    );

    if (shipPiece === undefined) return false;
    if (shipPiece.hitStatus === true) return false;

    this.#timesHit += 1;

    return shipPiece.hit();
  }

  isSunk() {
    const isNotSunk = this.#shipPieces.some(shipPiece =>
      shipPiece.hitStatus === false
    );

    return isNotSunk;
  }

  #buildShip(coordStart, horizontal, length) {
    for (let i = 1; i <= length; i += 1) {
      let shipPieceCoord = null;

      if (horizontal) {
        shipPieceCoord = new ShipPiece(coordStart.getX + i, coordStart.getY);
      } else {
        shipPieceCoord = new ShipPiece(coordStart.getX, coordStart.getY + i);
      }

      this.#shipPieces.push(shipPieceCoord);
    }
  }

  get length() { return this.#shipPieces.length; }
  
  get timesHit() { return this.#timesHit;  }
}

export default Ship;