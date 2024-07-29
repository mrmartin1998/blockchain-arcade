// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract MockV3Aggregator is AggregatorV3Interface {
    int256 private _latestAnswer;
    uint8 private _decimals;

    constructor(uint8 decimals, int256 initialAnswer) {
        _decimals = decimals;
        _latestAnswer = initialAnswer;
    }

    function decimals() external view override returns (uint8) {
        return _decimals;
    }

    function description() external pure override returns (string memory) {
        return "MockV3Aggregator";
    }

    function version() external pure override returns (uint256) {
        return 0;
    }

    function getRoundData(uint80)
        external
        view
        override
        returns (
            uint80,
            int256 answer,
            uint256,
            uint256,
            uint80
        )
    {
        return (0, _latestAnswer, 0, 0, 0);
    }

    function latestRoundData()
        external
        view
        override
        returns (
            uint80,
            int256 answer,
            uint256,
            uint256,
            uint80
        )
    {
        return (0, _latestAnswer, 0, 0, 0);
    }

    function updateAnswer(int256 newAnswer) public {
        _latestAnswer = newAnswer;
    }
}
