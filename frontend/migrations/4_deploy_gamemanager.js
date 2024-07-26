const ArcadeToken = artifacts.require("ArcadeToken");
const ArcadeGame = artifacts.require("ArcadeGame");
const GameManager = artifacts.require("GameManager");

module.exports = async function (deployer) {
  const token = await ArcadeToken.deployed();
  const game = await ArcadeGame.deployed();
  await deployer.deploy(GameManager, token.address, game.address);
};
