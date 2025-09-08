const SampleProblem = require("./src/problems/SampleProblem");

/**
 * To verify your problem statement, instantiate the relevant classes
 * and invoke their methods within the main function as described in the example.
 *
 * This function serves to demonstrate and test the classes for the problem statement.
 */
function main() {
  // this is the sample problem statement example
  const distanceInKm = 3;
  const deliveryCost = SampleProblem.calculateCost(distanceInKm);
  console.log("delivery cost is " + deliveryCost);
}

main();
