// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ArcadeToken.sol";
import "./BaseGame.sol";

contract GameManager {
    ArcadeToken public token;
    mapping(address => bool) public registeredGames;

    constructor(ArcadeToken _token) {
        token = _token;
    }

    function registerGame(address gameAddress) public {
        registeredGames[gameAddress] = true;
    }

    function playGame(address gameAddress) public {
        require(registeredGames[gameAddress], "Game not registered");
        BaseGame game = BaseGame(gameAddress);
        game.play();
    }
}
