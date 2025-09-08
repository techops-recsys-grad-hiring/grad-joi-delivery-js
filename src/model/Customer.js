class Customer {
  /** @type {string} */
  #customerId;

  /** @type {string} */
  #firstName;

  /** @type {string} */
  #lastName;

  /** @type {string} */
  #loyaltyPoints;

  /** @type {import('../model/LoyaltyTier').LoyaltyTier} */
  #tier;

  /**
   * @param {string} customerId
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(customerId, firstName, lastName) {
    this.#customerId = customerId;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  /** @param {string} loyaltyPoints */
  setLoyaltyPoints(loyaltyPoints) {
    this.#loyaltyPoints = loyaltyPoints;
  }

  /** @param {import('../model/LoyaltyTier').LoyaltyTier} tier */
  setTier(tier) {
    this.#tier = tier;
  }

  /** @returns {string} */
  getCustomerId() {
    return this.#customerId;
  }

  /** @returns {string} */
  getFirstName() {
    return this.#firstName;
  }

  /** @returns {string} */
  getLastName() {
    return this.#lastName;
  }

  /** @returns {string} */
  getLoyaltyPoints() {
    return this.#loyaltyPoints;
  }

  /** @returns {import('../model/LoyaltyTier').LoyaltyTier} */
  getTier() {
    return this.#tier;
  }
}

module.exports = Customer;
