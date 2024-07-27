// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ArcadeToken.sol";
import "./ArcadeGame.sol";

contract GameManager {
    ArcadeToken public token;
    ArcadeGame public game;

    constructor(address _token, address _game) {
        token = ArcadeToken(_token);
        game = ArcadeGame(_game);
    }

    function playGame() public {
        uint256 gameCost = game.gameCost();
        require(token.allowance(msg.sender, address(this)) >= gameCost, "Allowance not set");
        require(token.balanceOf(msg.sender) >= gameCost, "Insufficient token balance");

        token.transferFrom(msg.sender, address(this), gameCost);
        game.play();
    }
}
