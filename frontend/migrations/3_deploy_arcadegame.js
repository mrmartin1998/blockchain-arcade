const ArcadeGame = artifacts.require("ArcadeGame");
const ArcadeToken = artifacts.require("ArcadeToken");

module.exports = async function (deployer) {
  const gameCost = web3.utils.toWei('10', 'ether'); // Example game cost
  await deployer.deploy(ArcadeGame, ArcadeToken.address, gameCost);
};
