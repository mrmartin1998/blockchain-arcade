const MockV3Aggregator = artifacts.require("MockV3Aggregator");
const ArcadeToken = artifacts.require("ArcadeToken");
const ArcadeGame = artifacts.require("ArcadeGame");
const GameManager = artifacts.require("GameManager");

module.exports = async function(deployer) {
    // Deploy the MockV3Aggregator contract
    await deployer.deploy(MockV3Aggregator, 18, web3.utils.toWei('2000', 'ether')); // 18 decimals, initial price 2000 USD
    const mockPriceFeed = await MockV3Aggregator.deployed();

    // Deploy the ArcadeToken contract with the address of the MockV3Aggregator
    await deployer.deploy(ArcadeToken, mockPriceFeed.address);
    const arcadeToken = await ArcadeToken.deployed();

    // Deploy the ArcadeGame contract with the address of the ArcadeToken and the game cost (e.g., 10 tokens)
    const gameCost = web3.utils.toWei('10', 'ether');
    await deployer.deploy(ArcadeGame, arcadeToken.address, gameCost);
    const arcadeGame = await ArcadeGame.deployed();

    // Deploy the GameManager contract with the address of the ArcadeToken and ArcadeGame
    await deployer.deploy(GameManager, arcadeToken.address, arcadeGame.address);
    const gameManager = await GameManager.deployed();
};
