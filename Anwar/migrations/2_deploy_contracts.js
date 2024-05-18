const MyContract = artifacts.require("MyContract");

module.exports = function (deployer) {
	// Deploy the contract with an initial message
	deployer.deploy(MyContract, "Hello, Truffle!");
};
