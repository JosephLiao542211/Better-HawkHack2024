module.exports = {
  networks: {
    development: {
      host: "10.92.99.221", // Localhost
      port: 8546, // Port used by Ganache GUI
      network_id: "*", // Any network
    },
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin
      settings: { // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "istanbul"
      }
    }
  },
  db: {
    enabled: false
  }
};
