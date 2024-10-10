module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "5777",       // Any network (default: none)
      gas: 6721975,          // Gas limit
      gasPrice: 20000000000, // 20 Gwei (default: 20 Gwei)
    }
    
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Use the specific Solidity version
    }
  }
};
