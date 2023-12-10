class Coordinate {
    #coordX = 0;

    #coordY = 0;

    constructor(coordX, coordY) {
        this.#coordX = coordX;
        this.#coordY = coordY;
    }

    get coordX() { return this.#coordX; }

    get coordY() { return this.#coordY; }
}

export default Coordinate;