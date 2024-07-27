// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ArcadeGame {
    IERC20 public arcadeToken;
    uint256 public gameCost;

    event GamePlayed(address indexed player, uint256 cost);

    constructor(IERC20 _arcadeToken, uint256 _gameCost) {
        arcadeToken = _arcadeToken;
        gameCost = _gameCost;
    }

    function play() public {
        require(arcadeToken.balanceOf(msg.sender) >= gameCost, "Insufficient token balance");
        require(arcadeToken.allowance(msg.sender, address(this)) >= gameCost, "Allowance too low");

        arcadeToken.transferFrom(msg.sender, address(this), gameCost);
        emit GamePlayed(msg.sender, gameCost);
    }

    function withdrawTokens(address to, uint256 amount) public {
        arcadeToken.transfer(to, amount);
    }
}
