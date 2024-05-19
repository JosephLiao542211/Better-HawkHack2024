// migrations/2_deploy_contracts.js

const BountyContract = artifacts.require("BountyContract");

module.exports = function (deployer) {
  const durationInSeconds = 86400; // Set the duration in seconds (e.g., 86400 seconds for 1 day)
  deployer.deploy(BountyContract, durationInSeconds);
};
