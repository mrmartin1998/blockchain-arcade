const ArcadeGame = artifacts.require("ArcadeGame");

module.exports = function (deployer) {
  deployer.deploy(ArcadeGame, web3.utils.toWei('1', 'ether')); // Set game fee to 1 token
};
