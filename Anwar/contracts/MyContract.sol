// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BountyContract {
    address public owner;
    uint256 public expirationTimestamp;
    uint256 public initialAmount;
    uint256 public pool1;
    uint256 public pool2;
    mapping(address => uint256) public contributions;

    event TokensAdded(address indexed user, uint256 amount);
    event ContractCreated(address indexed owner, uint256 expirationTimestamp, uint256 initialAmount);
    event TokensDistributed(uint256 pool1, uint256 pool2);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier beforeExpiration() {
        require(block.timestamp < expirationTimestamp, "The contract has expired");
        _;
    }

    constructor(uint256 _expirationTimestamp, uint256 _initialAmount) {
        owner = msg.sender;
        expirationTimestamp = _expirationTimestamp;
        initialAmount = _initialAmount;
        pool1 = 0;
        pool2 = 0;
        emit ContractCreated(owner, expirationTimestamp, initialAmount);
    }

    function addTokens(uint256 amount) external beforeExpiration {
        contributions[msg.sender] += amount;
        pool1 += amount / 2;
        pool2 += amount / 2;
        emit TokensAdded(msg.sender, amount);
    }

    function distributeTokens() external onlyOwner {
        require(block.timestamp >= expirationTimestamp, "The contract has not expired yet");
        emit TokensDistributed(pool1, pool2);
        // Additional logic for distribution goes here
    }
}
