// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract ArcadeToken is ERC20 {
    address public feeCollector;
    AggregatorV3Interface internal priceFeed;
    uint256 public constant USD_FEE = 1 * 10 ** 18; // $1 in wei

    constructor() ERC20("ArcadeToken", "ARCD") {
        feeCollector = msg.sender;
        // Address for the ETH/USD price feed on the mainnet, change if using a different network
        priceFeed = AggregatorV3Interface(0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F); 
    }

    function getLatestPrice() public view returns (uint256) {
        (
            , 
            int price,
            ,
            ,
            
        ) = priceFeed.latestRoundData();
        return uint256(price) * 10 ** 10; // Convert price to 18 decimal places
    }

    function calculateFee() public view returns (uint256) {
        uint256 ethPrice = getLatestPrice();
        return USD_FEE / ethPrice;
    }

    function mint(address to, uint256 amount) public payable {
        uint256 fee = calculateFee();
        require(msg.value >= fee, "Insufficient fee");
        payable(feeCollector).transfer(msg.value);
        _mint(to, amount);
    }
}
