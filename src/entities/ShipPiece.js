import Coordinate from "./Coordinate";

class ShipPiece {
    #coord = null;

    #hitStatus = false;

    constructor(coordX, coordY) {
        this.#coord = new Coordinate(coordX, coordY);
    }

    hit() {
        this.#hitStatus = true;
        return this.#hitStatus;
    }

    get coordX() { return this.#coord.coordX }

    get coordY() { return this.#coord.coordY; }

    get hitStatus() { return this.#hitStatus; }
}

export default ShipPiece;