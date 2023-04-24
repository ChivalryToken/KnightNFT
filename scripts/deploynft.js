const { ethers } = require("hardhat");

async function main() {
  const KnightNFT = await ethers.getContractFactory("KnightNFT");
  const knightNFT = await KnightNFT.deploy();

  console.log("KnightNFT deployed to:", knightNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
