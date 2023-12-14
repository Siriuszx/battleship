class Player {
  #playerName = '';

  #hitLog = [];

  #playerShips = [];

  constructor(userName) {
    this.#playerName = userName;
  }

  logHit(coord) {
    this.#hitLog.push(coord);
  }

  addShip(ship) {
    this.#playerShips.push(ship);
  }

  getHitLog() {
    return this.#hitLog.slice();
  }

  getShips() {
    return this.#playerShips.slice();
  }

  resetUser() {
    this.#hitLog = [];
    this.#playerShips = [];
  }

  getPlayerName() {
    return this.#playerName;
  };

  get fleetSize() { return this.#playerShips.length; }
}

export default Player;