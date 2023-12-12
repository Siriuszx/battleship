import Coordinate from "./Coordinate";
import hitStatus from "./HitStatus";

class BoardCell {
    #coord = null;

    #ship = null;

    #isOccupied = false;

    #hasBeenHit = false;

    constructor(coordX, coordY) {
        this.#coord = new Coordinate(coordX, coordY);
    }

    occupy(ship) {
        if (this.#ship) return false;

        this.#isOccupied = true;
        this.#ship = ship;

        return true;
    }

    hit() {
        if (this.#hasBeenHit === true) return false;

        this.#hasBeenHit = true;

        if (this.#ship) {
            this.#ship.tryHit(this.#coord);
        }

        return true;
    }

    getCoord() { return this.#coord; }

    getCoordString() {
        return `X: ${this.#coord.coordX} Y: ${this.#coord.coordY}`;
    }

    getHitStatus() {
        switch (this.#hasBeenHit) {
            case false: {
                return hitStatus().NOT_HIT;
            }
            case true: {
                if (this.#ship) {
                    return hitStatus().HIT_SHIP;
                }

                return hitStatus().HIT_CELL;
            }
            default:
                return null;
        }
    }

    get isOccupied() { return this.#isOccupied; }
}

export default BoardCell;