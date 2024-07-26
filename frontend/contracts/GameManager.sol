// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ArcadeToken.sol";
import "./ArcadeGame.sol";

contract GameManager {
    ArcadeToken public token;
    ArcadeGame public game;
    address public owner;

    constructor(ArcadeToken _token, ArcadeGame _game) {
        token = _token;
        game = _game;
        owner = msg.sender;
    }

    function playGame() public {
        uint256 gameFee = game.gameFee();
        require(token.transferFrom(msg.sender, address(this), gameFee), "Transfer failed");
        require(game.playGame{value: gameFee}(), "Game play failed");
    }
}
