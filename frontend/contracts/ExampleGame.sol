// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseGame.sol";

contract ExampleGame is BaseGame {

    constructor(IERC20 _arcadeToken, uint256 _gameCost) BaseGame(_arcadeToken, _gameCost) {}

    function play() public override {
        require(arcadeToken.balanceOf(msg.sender) >= gameCost, "Insufficient token balance");
        require(arcadeToken.allowance(msg.sender, address(this)) >= gameCost, "Allowance too low");

        arcadeToken.transferFrom(msg.sender, address(this), gameCost);
        emit GamePlayed(msg.sender, gameCost);
    }
}
