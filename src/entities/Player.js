class Player {
  #userName = '';

  #hitLog = [];

  constructor(userName) {
    this.#userName = userName;
  }

  logHit(coord) {
    this.#hitLog.push(coord);
  }

  getHitLog() {
    const hitLogCopy = this.#hitLog.slice();

    return hitLogCopy;
  }

  clearHitLog() {
    this.#hitLog = [];
  }

  getUserName() {
    return this.#userName
  };
}

export default Player;