const GameManager = artifacts.require("GameManager");
const ArcadeGame = artifacts.require("ArcadeGame");
const ArcadeToken = artifacts.require("ArcadeToken");

module.exports = async function (deployer) {
  await deployer.deploy(GameManager, ArcadeToken.address, ArcadeGame.address);
};
