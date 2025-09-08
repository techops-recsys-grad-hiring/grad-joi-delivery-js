class SampleProblem {
  /**
   * @param {number} distanceKm
   * @returns {number}
   */
  static calculateCost(distanceKm) {
    if (distanceKm <= 0) {
      throw new Error("Distance must be positive");
    }

    const baseCost = 50.0;

    if (distanceKm <= 5) {
      return baseCost;
    } else {
      const extraDistance = distanceKm - 5;
      return baseCost + extraDistance * 10;
    }
  }
}

module.exports = SampleProblem;
