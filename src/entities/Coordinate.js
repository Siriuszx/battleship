class Coordinate {
    #coordX = 0;

    #coordY = 0;

    constructor(coordX, coordY) {
        this.#coordX = coordX;
        this.#coordY = coordY;
    }

    get coordX() { return Number.parseInt(this.#coordX, 16); }

    get coordY() { return Number.parseInt(this.#coordY, 16); }
}

export default Coordinate;