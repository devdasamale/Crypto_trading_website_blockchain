// https://eth-sepolia.g.alchemy.com/v2/wb0em02FZisHyhifkXjecV7wzR1ywaAn

require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: "0.8.0",
  networks: {
  sepolia : {
      url: `https://eth-sepolia.g.alchemy.com/v2/wb0em02FZisHyhifkXjecV7wzR1ywaAn`,
      accounts: [`c04279956751ea636d8b04f44f72b7c3a487b7e4ab887623a55bcb5b252ca2d9`]
    },
  }
};