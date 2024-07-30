const MockV3Aggregator = artifacts.require("MockV3Aggregator");
const ArcadeToken = artifacts.require("ArcadeToken");
const GameManager = artifacts.require("GameManager");

module.exports = async function(deployer) {
    await deployer.deploy(MockV3Aggregator, 18, web3.utils.toWei('2000', 'ether')); // 18 decimals, initial price 2000 USD
    const mockPriceFeed = await MockV3Aggregator.deployed();

    await deployer.deploy(ArcadeToken, mockPriceFeed.address);
    const arcadeToken = await ArcadeToken.deployed();

    await deployer.deploy(GameManager, arcadeToken.address);
    const gameManager = await GameManager.deployed();
};
