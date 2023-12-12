class Coordinate {
    #coordX = 0;

    #coordY = 0;

    constructor(coordX, coordY) {
        this.#coordX = coordX;
        this.#coordY = coordY;
    }

    get coordX() { return Number.parseInt(this.#coordX, 10); }

    get coordY() { return Number.parseInt(this.#coordY, 10); }
}

export default Coordinate;