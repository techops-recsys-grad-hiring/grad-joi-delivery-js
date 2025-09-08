class Delivery {
  /** @type {number} */
  #timeInMinutes;

  /** @type {number} */
  #distance;

  /**
   * @param {number} timeInMinutes
   * @param {number} distance
   */
  constructor(timeInMinutes, distance) {
    this.#timeInMinutes = timeInMinutes;
    this.#distance = distance;
  }

  /** @returns {number} */
  getTimeInMinutes() {
    return this.#timeInMinutes;
  }

  /** @param {number} timeInMinutes */
  setTimeInMinutes(timeInMinutes) {
    this.#timeInMinutes = timeInMinutes;
  }

  /** @returns {number} */
  getDistance() {
    return this.#distance;
  }

  /** @param {number} distance */
  setDistance(distance) {
    this.#distance = distance;
  }
}

module.exports = Delivery;
