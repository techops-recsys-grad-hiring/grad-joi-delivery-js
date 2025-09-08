class Store {
  /** @type {string} */
  #storeId;

  /** @type {string} */
  #zone;

  /** @type {string[]} */
  #items;

  /**
   * @param {string} [storeId]
   * @param {string} [zone]
   * @param {string[]} [items]
   */
  constructor(storeId, zone, items) {
    this.#storeId = storeId;
    this.#zone = zone;
    this.#items = items;
  }

  /** @returns {string} */
  getStoreId() {
    return this.#storeId;
  }

  /** @param {string} storeId */
  setStoreId(storeId) {
    this.#storeId = storeId;
  }

  /** @returns {string} */
  getZone() {
    return this.#zone;
  }

  /** @param {string} zone */
  setZone(zone) {
    this.#zone = zone;
  }

  /** @returns {string[]} */
  getItems() {
    return this.#items;
  }

  /** @param {string[]} items */
  setItems(items) {
    this.#items = items;
  }
}

module.exports = Store;
