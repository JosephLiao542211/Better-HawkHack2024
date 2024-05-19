// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BountyContract {
    address public owner;
    uint256 public expirationTimestamp;
    bool public isExpired;
    uint256 public totalFunds;

    struct User {
        address userAddress;
        uint256 amount;
        bool canWithdraw;
    }

    mapping(address => User) public users;
    address[] public userAddresses;

    constructor(uint256 _durationInSeconds) {
        owner = msg.sender;
        expirationTimestamp = block.timestamp + _durationInSeconds;
        isExpired = false;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier beforeExpiration() {
        require(block.timestamp < expirationTimestamp, "Contract has expired");
        _;
    }

    modifier afterExpiration() {
        require(block.timestamp >= expirationTimestamp, "Contract has not yet expired");
        _;
    }

    function addFunds() public payable beforeExpiration {
        User storage user = users[msg.sender];

        if (user.userAddress == address(0)) {
            user.userAddress = msg.sender;
            user.amount = msg.value;
            user.canWithdraw = true;
            userAddresses.push(msg.sender);
        } else {
            user.amount += msg.value;
        }

        totalFunds += msg.value;
    }

    function setExpiration() public onlyOwner {
        require(block.timestamp >= expirationTimestamp, "Expiration time has not yet reached");
        isExpired = true;
    }

    function distributeFunds() public afterExpiration onlyOwner {
        require(isExpired, "Contract has not been marked as expired");

        uint256 totalFalseAmount = 0;
        uint256 totalTrueAmount = 0;

        for (uint256 i = 0; i < userAddresses.length; i++) {
            User storage user = users[userAddresses[i]];
            if (!user.canWithdraw) {
                totalFalseAmount += user.amount;
            } else {
                totalTrueAmount += user.amount;
            }
        }

        for (uint256 i = 0; i < userAddresses.length; i++) {
            User storage user = users[userAddresses[i]];
            if (user.canWithdraw) {
                uint256 reward = user.amount + (totalFalseAmount * user.amount / totalTrueAmount);
                payable(user.userAddress).transfer(reward);
            }
        }
    }

    function markUserForWithdrawal(bool _canWithdraw) public {
        require(users[msg.sender].userAddress != address(0), "User does not exist");
        users[msg.sender].canWithdraw = _canWithdraw;
    }
}