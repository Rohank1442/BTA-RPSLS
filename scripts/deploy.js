// // // We require the Hardhat Runtime Environment explicitly here. This is optional
// // // but useful for running the script in a standalone fashion through `node <script>`.
// // //
// // // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // // global scope, and execute the script.
// const hre = require("hardhat");

// // async function main(){
// //   const RPSLS = await hre.ethers.getContractFactory("RPSLS");
// //   const RPSLSF = await RPSLS.deploy();
// //   await RPSLSF.deployed();
// //   console.log("RPSLS deployed to:", RPSLSF.address);
// // }

// async function main(){
//   const RPSLSF = await hre.ethers.deployContract(_move1Hash, _player1, _player2);
//   // Deploy the contract.
//   await RPSLSF.waitForDeployment();
//   console.log("BuyMeACoffee deployed to:", RPSLSF.target);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


// // scripts/deploy.js

// // async function main() {
// //   const [deployer] = await ethers.getSigners();
// //   console.log("Deploying contracts with the account:", deployer.address);

// //   // Deploy RPSLSFactory contract
// //   const RPSLSFactory = await ethers.getContractFactory("RPSLS");
// //   const rpslsFactory = await RPSLSFactory.deploy();
// //   await rpslsFactory.deployed();
// //   console.log("RPSLSFactory deployed to:", rpslsFactory.address);


// // // async function main(){
// // //   const RPSLS = await hre.ethers.getContractFactory("RPSLS");
// // //   const RPSLSF = await RPSLS.deploy();
// // //   await RPSLSF.deployed();
// // //   console.log("RPSLS deployed to:", RPSLSF.address);
// // // }


//   // Deploy additional contracts or interact with them here

//   // Perform other deployment steps

// //   console.log("Deployment complete.");
// // }

// // main()
// //   .then(() => process.exit(0))
// //   .catch((error) => {
// //     console.error("Error deploying contracts:", error);
// //     process.exit(1);
// //   });


// const { ethers, upgrades } = require("hardhat");

// async function main() {
//   const [deployer] = await ethers.getSigners();

//   // Deploy RPSLS contract
//   const RPSLS = await ethers.getContractFactory("RPSLS", [_move1Hash, _player1, _player2]);
//   const rpsls = await RPSLS.deploy();
//   await rpsls.deployed();
//   console.log("RPSLS deployed to:", rpsls.address);

//   // Deploy RPSLSFactory contract
//   const RPSLSFactory = await ethers.getContractFactory("RPSLSFactory");
//   const rpslsFactory = await upgrades.deployProxy(RPSLSFactory);
//   await rpslsFactory.deployed();
//   console.log("RPSLSFactory deployed to:", rpslsFactory.address);

//   // Perform any additional contract deployments or interactions here

//   console.log("Deployment complete.");
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error("Error deploying contracts:", error);
//     process.exit(1);
//   });


const hre = require("hardhat");

// async function main(){
//   const RPSLS = await hre.ethers.getContractFactory("RPSLS");
//   const RPSLSF = await RPSLS.deploy();
//   await RPSLSF.deployed();
//   console.log("RPSLS deployed to:", RPSLSF.address);
// }

async function main(){
  const RPSLSF = await hre.ethers.deployContract("RPSLSFactory");
  // Deploy the contract.
  await RPSLSF.waitForDeployment();
  console.log("Contract deployed to:", RPSLSF.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});