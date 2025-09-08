class Item {
  /** @type {string} */
  #id;

  /** @type {string} */
  #name;

  /** @type {string} */
  #description;

  /** @type {number} */
  #price;

  /** @type {import('../types/Category')} */
  #category;

  /**
   * Constructor that handles all Java constructor scenarios
   * @param {string} [id=''] - Item ID
   * @param {string} [name=''] - Item name
   * @param {string} [description=''] - Item description
   * @param {number} [price=0] - Item price
   * @param {import('../types/Category')} [category='DEFAULT'] - Item category
   */
  constructor(
    id = "",
    name = "",
    description = "",
    price = 0,
    category = "DEFAULT"
  ) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#price = price;
    this.#category = category;
  }

  /**
   * @param {string} description - New description
   */
  setDescription(description) {
    this.#description = description;
  }

  /**
   * @returns {string} Item ID
   */
  getId() {
    return this.#id;
  }

  /**
   * @returns {string} Item name
   */
  getName() {
    return this.#name;
  }

  /**
   * @returns {string} Item description
   */
  getDescription() {
    return this.#description;
  }

  /**
   * @returns {number} Item price
   */
  getPrice() {
    return this.#price;
  }
}

module.exports = Item;
