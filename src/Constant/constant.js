const contractAddress = "0x8E6779aAbF48Ce262e35f1ADfaA73F0fc83c3b50";

const contractAbi = [
  {
    "inputs": [],
    "name": "game",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGame",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "gameName",
        "type": "string"
      }
    ],
    "name": "setGame",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

  export {contractAddress,contractAbi};