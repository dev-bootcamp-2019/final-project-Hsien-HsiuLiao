module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }, 
    rinkeby: {
      provider: () => new HDWallet(mnemonic, 'https://rinkeby.infura.io/${infuraKey}'),
      network_id: 4,    //Rinkeby's id
      gas: 5500000,
    },
  },

  compilers: {
     solc: {
       version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
  }
};
