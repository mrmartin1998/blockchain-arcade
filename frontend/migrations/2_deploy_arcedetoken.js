const ArcadeToken = artifacts.require("ArcadeToken");

module.exports = function (deployer) {
  deployer.deploy(ArcadeToken);
};
