// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BaseGame {
    IERC20 public arcadeToken;
    uint256 public gameCost;

    event GamePlayed(address indexed player, uint256 cost);
    event Reward(address indexed player, uint256 reward);

    constructor(IERC20 _arcadeToken, uint256 _gameCost) {
        arcadeToken = _arcadeToken;
        gameCost = _gameCost;
    }

    function play() public virtual {
        require(arcadeToken.balanceOf(msg.sender) >= gameCost, "Insufficient token balance");
        require(arcadeToken.allowance(msg.sender, address(this)) >= gameCost, "Allowance too low");

        arcadeToken.transferFrom(msg.sender, address(this), gameCost);
        emit GamePlayed(msg.sender, gameCost);
    }

    function rewardPlayer(address player, uint256 rewardAmount) internal {
        arcadeToken.transfer(player, rewardAmount);
        emit Reward(player, rewardAmount);
    }

    function setGameCost(uint256 newCost) public virtual {
        gameCost = newCost;
    }
}
