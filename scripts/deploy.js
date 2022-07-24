const hre = require("hardhat")

async function master() {
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const contract = await MyContract.deploy( );

  await contract.deployed();

  console.log("My contract deployed to:", contract.address)
}

master()
.then(()=> process.exit(0))
.catch((error) => {
  console.log(error)
  process.exit(1)
})