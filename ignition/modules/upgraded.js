
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("UpgradedModule", (m) => {

  const nftup = m.contract("NFTUpgradable");

  return { nftup };
});