const blockchainVocab = [
  "account",
  "address",
  "public key",
  "air-gapping",
  "airdrop",
  "altcoin",
  "anti-money laundering",
  "API",
  "attestation",
  "beacon chain",
  "bitcoin",
  "block",
  "block height",
  "block reward",
  "block time",
  "blockchain",
  "brain wallet",
  "bug bounty",
  "bytecode",
  "byzantium-fork",
  "client",
  "coin",
  "cold-wallet",
  "cold-storage",
  "confirmation",
  "consensus",
  "constantinople-fork",
  "contract",
  "crypto",
  "cryptoeconomics",
  "cryptoassets",
  "cryptocurrency",
  "cryptography",
  "decentralization",
  "decentralized application",
  "decentralized exchange",
  "deposit",
  "Devcon",
  "difficulty bomb",
  "digital asset",
  "digital identity",
  "digital signature",
  "Destributed-Denial-of-Service-Attack",
  "distributed-ledger",
  "double spend",
  "encrypted keys",
  "unencrypted keys",
  "encryption",
  "entropy",
  "epoch",
  "ERC-20-Token-Standard",
  "ERC-721-Token-Standard",
  "ether",
  "ETH",
  "Ethereum",
  "Ethereum-Virtual-Machine",
  "exchange",
  "faucet",
  "fiat currency",
  "final",
  "finality",
  "fork",
  "gas",
  "gas limit",
  "gas price",
  "genesis block",
  "Gwei",
  "halving",
  "hard fork",
  "hardware wallet",
  "hash",
  "HD-wallet",
  "hexadecimal",
  "hot wallet",
  "hot storage",
  "Hyperledger",
  "Identicon",
  "immutability",
  "ICO",
  "internal-transaction",
  "InterPlanetary-File-System",
  "keystore-file",
  "Know Your Customer",
  "Layer-2",
  "light client",
  "Liquid-Democracy",
  "liquidity",
  "mainnet",
  "market cap",
  "Merkle-Patricia-trie",
  "Mesh",
  "MetaMask",
  "mining",
  "mnemonic-phrase",
  "Multi Signature",
  "node",
  "NFT",
  "nonce",
  "ommer block",
  "optimistic rollup",
  "Oracle",
  "peer-to-peer",
  "P2P",
  "parity",
  "permissioned ledger",
  "Plasma",
  "Proof of Assignment",
  "Proof of Authority",
  "Proof of Stake",
  "Proof of Work",
  "private blockchain",
  "private currency",
  "private key",
  "protocol",
  "public blockchain",
  "public key",
  "Relayer",
  "rollups",
  "Remote Procedure Call",
  "rug pull",
  "Satoshi Nakamoto",
  "scalability",
  "seed phrase",
  "Secret Recovery Phrase",
  "self-executing",
  "serialization",
  "sharding",
  "sidechains",
  "slashing condition",
  "slot",
  "smart contracts",
  "soft fork",
  "Solidity",
  "stablecoin",
  "staking",
  "state",
  "state channels",
  "szabo",
  "Testnet",
  "Testnet Koven",
  "Testnet Rinkeby",
  "Testnet Ropsten",
  "token",
  "transaction block",
  "transaction fee",
  "trustless",
  "Turing Complete",
  "validator",
  "validity proof",
  "Validium",
  "Wallet",
  "Web 3.0",
  "zk-SNARK",
  "Zero-Knowledge Succinct Non-Interactive ARguments of Knowledge",
  "zero address",
  "51% Attack",
  "Binance",
  "Tether",
  "Cardano",
  "ADA",
  "Solana",
  "XRP",
  "Dogecoin",
  "SHIBA INU",
  "Litecoin",
  "Helium",
  "Terra",
  "Avalanche",
  "Stellar",
  "TRON",
  "Tezos",
  "PancakeSwap",
  "Kusama",
  "Quant",
  "Safemoon",
];
const lorem =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum ";
const loremArr = (lorem + lorem).split(" ");

const cryptoLoremList = loremArr.concat(blockchainVocab);

const shuffleVocabArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

shuffleVocabArray(cryptoLoremList);
const generatorVocab = shuffleVocabArray(cryptoLoremList);

const WORDS_PER_SENTENCE = 25;
const WORDS_PER_SENTENCE_STD = 4.5;

const randomGauss = (std) => {
  let r = 0;
  for (let i = std; i > 0; i--) {
    r += Math.random();
  }
  return r / std;
};

const getRandomWord = () => {
  const randomIdx = randomGauss(4);
  const wordIdx = Math.floor(randomIdx * generatorVocab.length - 1);
  const word = generatorVocab[wordIdx];
  return word;
};

const createSentence = () => {
  let randomSentenceLength = Math.floor(
    randomGauss(WORDS_PER_SENTENCE_STD) * WORDS_PER_SENTENCE
  );
  let sentence = "";
  for (let i = 0; i <= randomSentenceLength; i++) {
    const word = getRandomWord();
    sentence = sentence.concat(" ", word).trimStart();
  }
  const capitalSentence = sentence[0].toUpperCase() + sentence.slice(1);

  //pull sentence words into array
  const sentenceArray = capitalSentence.split(" ");
  //find random index for comma, 4 < comma < sentence.length - 4
  const randomCommaLocation =
    Math.floor(randomGauss(4.5) * sentenceArray.length - 4) + 4;
  //add comma to word at random index
  const wordWithComma = sentenceArray[randomCommaLocation] + ",";
  //replace word at randomCommaLocation with word containing comma
  sentenceArray.splice(randomCommaLocation, 1, wordWithComma);
  //rejoin words into new sentence
  const newSentence = sentenceArray.join(" ");
  return newSentence;
};

const createParagraph = () => {
  const paragraph = [];
  for (let i = 0; i < 3; i++) {
    paragraph.push(createSentence(i));
  }
  const punctuatedParagraph = paragraph.join(". ") + ".";
  return punctuatedParagraph;
};

const generateBlocks = (num) => {
  const paragraphs = [];
  for (let i = 0; i < num; i++) {
    paragraphs.push(createParagraph());
  }
  return paragraphs;
};

export default generateBlocks;
