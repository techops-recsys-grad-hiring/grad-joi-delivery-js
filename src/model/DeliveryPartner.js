class DeliveryPartner {
  /** @type {string} */
  #id;
  /** @type {string} */
  #name;
  /** @type {Delivery[]} */
  #deliveries;

  /**
   * @param {string} [id=""]
   * @param {string} [name=""]
   * @param {Delivery[]} [deliveries=[]]
   */
  constructor(id = "", name = "", deliveries = []) {
    this.#id = id;
    this.#name = name;
    this.#deliveries = deliveries;
  }

  /** @returns {string} */
  getId() {
    return this.#id;
  }

  /** @param {string} id */
  setId(id) {
    this.#id = id;
  }

  /** @returns {string} */
  getName() {
    return this.#name;
  }

  /** @param {string} name */
  setName(name) {
    this.#name = name;
  }

  /** @returns {Delivery[]} */
  getDeliveries() {
    return this.#deliveries;
  }

  /** @param {Delivery[]} deliveries */
  setDeliveries(deliveries) {
    this.#deliveries = deliveries;
  }
}

module.exports = DeliveryPartner;
