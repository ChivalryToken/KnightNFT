const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("KnightNFT", function () {
  it("Should mint an NFT", async function () {
    const KnightNFT = await ethers.getContractFactory("KnightNFT");
    const knightNFT = await KnightNFT.deploy();
    await knightNFT.deployed();

    const owner = await ethers.getSigner(0);
    const tokenId = 1;
    await knightNFT.connect(owner).mint(owner.address, tokenId);

    const balance = await knightNFT.balanceOf(owner.address);
    expect(balance).to.equal(1);
  });
});
