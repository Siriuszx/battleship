class ShipPiece {
    #coordX = 0;

    #coordY = 0;

    #hitStatus = false;

    constructor(coordX, coordY) {
        this.#coordX = coordX;
        this.#coordY = coordY;
    }

    hit() {
        this.#hitStatus = true;
        return this.#hitStatus;
    }

    get coordX() { return this.#coordX; }

    get coordY() { return this.#coordY; }

    get hitStatus() { return this.#hitStatus;} 
}

export default ShipPiece;