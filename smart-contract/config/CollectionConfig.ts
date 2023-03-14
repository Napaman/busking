import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'FMFBuskingDonald',
  tokenName: 'Donald_dacc Busking in the Metaverse NFT',
  tokenSymbol: 'FMFDD',
  //busking metadata used as a placemarker for future generative art or similar
  buskingMetadataUri: 'https://ipfs.io/ipfs/QmUgTL155Ef26uMVgEci9UZwDpPX4hsTh4a3znWvKv5zJs?filename=donald.json',
  maxSupply: 1000, //supply for this genesis busking nft capped to 1000 true fans
  //will enable if needed
  whitelistSale: {
    price: 0.0032,
    maxMintAmountPerTx: 100,
  },
  //can use this funtion for #23291
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0032,
    maxMintAmountPerTx: 100,
  },
  contractAddress: '0xE365680a9B7f5921F62BbAA9C278C290c749cC20',
  marketplaceIdentifier: 'Donalds-Busking-NFT',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
