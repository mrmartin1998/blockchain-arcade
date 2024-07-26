const ArcadeToken = artifacts.require("ArcadeToken");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei('100000000', 'ether'); // Example initial supply
  deployer.deploy(ArcadeToken, initialSupply);
};
