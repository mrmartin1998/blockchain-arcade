// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArcadeGame {
    uint256 public gameFee;

    constructor(uint256 _gameFee) {
        gameFee = _gameFee;
    }

    function playGame() public payable returns (bool) {
        require(msg.value >= gameFee, "Insufficient game fee");
        // Game logic here
        return true;
    }
}
