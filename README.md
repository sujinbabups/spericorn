# NFT Marketplace Smart Contracts

This repository contains two versions of an NFT Marketplace smart contract:
1. **NFTMarketPlace (Standard Contract)** - A basic ERC721 NFT marketplace contract where users can mint, list, buy, and delist NFTs.
2. **NFTUpgradable (Upgradeable Contract)** - An upgradable version of the NFT marketplace contract using OpenZeppelin's UUPSUpgradeable pattern for easy contract upgrades.

## Project Overview

The project allows users to mint NFTs, list them for sale, buy NFTs, and remove NFTs from sale. The contracts are based on the ERC721 standard for NFTs and use OpenZeppelin contracts for common functionality like ownership and upgradeability.

## Contract -1 Deployed Address :
```
0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## Contract -2 Deployed Address (Upgradable) :
```
0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Key Features
- Mint new NFTs and assign them to the caller.
- List NFTs for sale with a specified price.
- Buy listed NFTs by sending the correct price.
- Remove NFTs from sale.
- Upgradeable contract using OpenZeppelin's UUPS pattern for future contract upgrades.

## Prerequisites

Before you can deploy or interact with the contracts, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- [OpenZeppelin Contracts](https://openzeppelin.com/contracts/)
- [MetaMask](https://metamask.io/) (for interacting with the contracts via web3)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nft-marketplace.git
   cd nft-marketplace
2. Install dependencies:
     ```
      npm install
     ```
   
    
 
