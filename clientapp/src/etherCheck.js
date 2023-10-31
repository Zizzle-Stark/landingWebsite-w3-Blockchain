const { ethers } = require("ethers");
const eth = new ethers.JsonRpcApiProvider(
  "wss://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV"
);
const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_landAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_landID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_Address",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_allLatitudeLongitude",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_propertyPID",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isLandVerified",
        type: "bool",
      },
      {
        internalType: "address payable",
        name: "_landOwner",
        type: "address",
      },
    ],
    name: "addLand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_id",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_city",
        type: "string",
      },
      {
        internalType: "string",
        name: "_aadharNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_panNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isUserVerified",
        type: "bool",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_toremove",
        type: "address",
      },
    ],
    name: "removeLand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "landAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sentTo",
        type: "address",
      },
    ],
    name: "transferEther",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "landAddress",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnerShip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_getLand",
        type: "address",
      },
    ],
    name: "getLand",
    outputs: [
      {
        internalType: "uint256",
        name: "landID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "landAddress",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_rice",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "allLatitudeLongitude",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "propertyPID",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isforSell",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isLandVerified",
        type: "bool",
      },
      {
        internalType: "address payable",
        name: "landOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isRemoved",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_currentOwner",
        type: "address",
      },
    ],
    name: "getlandowner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
// const contract = new ethers.Contract(
//   "0xA8E021b285Bd2fcdfe855F3330b7c789Eb9DaC51",
//   _abi,
//   eth
// );

console.log(eth);
// console.log(contract);
