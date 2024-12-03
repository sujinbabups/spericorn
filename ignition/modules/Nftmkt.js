const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTModule", (m) => {
    const mkt = m.contract("NFTMarketPlace");
    return { mkt };
});