const SampleProblem = require("../problems/SampleProblem");

describe("SampleProblem", () => {
  it("should return the base of the delivery for distance less equal to 5 km", () => {
    const distanceInKm = 3;
    const cost = SampleProblem.calculateCost(distanceInKm);
    expect(cost).toBe(50);
  });
});
