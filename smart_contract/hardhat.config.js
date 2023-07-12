//https://eth-goerli.g.alchemy.com/v2/uWtf5d8Owf8VF5MpgQjq_CtlatuhYak4

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0' ,
  networks:{
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/uWtf5d8Owf8VF5MpgQjq_CtlatuhYak4',
      accounts: [ '8186a5e2962c6d685977ff79f595d1c3e11e7525b2932583b2df121dba9c2f83' ]
    }
  }
}