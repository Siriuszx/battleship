import ShipPiece from "./ShipPiece";

class Ship {
  #timesHit = 0;

  #shipPieces = [];

  constructor(coordStart, horizontal, length) {
    this.#buildShip(coordStart, horizontal, length);
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
    return this.#shipPieces.every(shipPiece =>
      shipPiece.hitStatus === true
    );
  }

  #buildShip(coordStart, horizontal, length) {
    for (let i = 0; i < length; i += 1) {
      let shipPieceCoord = null;

      if (horizontal) {
        shipPieceCoord = new ShipPiece(coordStart.coordX + i, coordStart.coordY);
      } else {
        shipPieceCoord = new ShipPiece(coordStart.coordX, coordStart.coordY + i);
      }

      this.#shipPieces.push(shipPieceCoord);
    }
  }

  get length() { return this.#shipPieces.length; }

  get timesHit() { return this.#timesHit; }
}

export default Ship;