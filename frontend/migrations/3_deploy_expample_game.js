const ExampleGame = artifacts.require("ExampleGame");
const ArcadeToken = artifacts.require("ArcadeToken");

module.exports = async function(deployer) {
    const arcadeToken = await ArcadeToken.deployed();
    const gameCost = web3.utils.toWei('10', 'ether');
    await deployer.deploy(ExampleGame, arcadeToken.address, gameCost);
};
