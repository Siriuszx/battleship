import Coordinate from "./Coordinate";

class BoardCell {
    #coordX = 1;

    #coordY = 1;

    #occupied = false;

    #ship = null;

    #hasBeenHit = false;

    constructor(coordX, coordY) {
        this.#coordX = coordX;
        this.#coordY = coordY;
    }

    occupy(ship) {
        this.#occupied = true;
        this.#ship = ship;
    }

    hit() {
        this.#hasBeenHit = true;

        if(this.#ship) {
            return this.#ship.tryHit(new Coordinate(this.#coordX, this.#coordY));
        }

        return false;
    }

    get occupied() { return this.#occupied; }

    get hasBeenHit() { return this.#hasBeenHit; }
}

export default BoardCell;