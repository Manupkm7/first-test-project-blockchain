require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const infuraKey = "1f4be5adb6574ec590b655ed1113d3bf";
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  solidity: "0.8.4",
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraKey}`,
      accounts: {mnemonic: mnemonic}
    }
  },
};