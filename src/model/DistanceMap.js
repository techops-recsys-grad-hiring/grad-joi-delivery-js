class DistanceMap {
  /** @type {string} */
  #zoneTo;

  /** @type {string} */
  #zoneFrom;

  /** @type {number} */
  #distance;

  /**
   * @param {string} zoneTo
   * @param {string} zoneFrom
   * @param {number} distance
   */
  constructor(zoneTo, zoneFrom, distance) {
    this.#zoneTo = zoneTo;
    this.#zoneFrom = zoneFrom;
    this.#distance = distance;
  }

  /** @returns {string} */
  getZoneTo() {
    return this.#zoneTo;
  }

  /** @param {string} zoneTo */
  setZoneTo(zoneTo) {
    this.#zoneTo = zoneTo;
  }

  /** @returns {string} */
  getZoneFrom() {
    return this.#zoneFrom;
  }

  /** @param {string} zoneFrom */
  setZoneFrom(zoneFrom) {
    this.#zoneFrom = zoneFrom;
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

module.exports = DistanceMap;
