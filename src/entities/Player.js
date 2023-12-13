class Player {
  #userName = '';

  #hitLog = [];

  #playerShips = [];

  constructor(userName) {
    this.userName = userName;
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

  setUserName(userName) {
    this.#userName = userName;
  }

  getUserName() {
    return this.#userName
  };
}

export default Player;