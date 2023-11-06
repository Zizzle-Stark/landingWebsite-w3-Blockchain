import "./login.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// const eth = new ethers.JsonRpcProvider(
//   "https://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV"
// );
const { ethers } = require("ethers");
const eth = new ethers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV"
);
const ListOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];

export default function ListedLand() {
  const navigate = useNavigate();
  const [blockNum, setBlockNum] = useState("");
  const urlParam = useParams();
  const moveDashBoard = () => {
    if (!urlParam.username == " ") {
      navigate(`/dashboard/${urlParam.username}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container center">
      <h1 className="text-center">Market Place</h1>
      <div className="text-center">
        <button onClick={() => moveDashBoard()} className="btn btn-primary">
          {" "}
          Go to DashBoard
        </button>
      </div>
      <>
        <ListedLands listedLands={ListOfLands} setBlockNum={setBlockNum} />
      </>
      <h2> {blockNum}</h2>
    </div>
  );
}

function ListedLands(props) {
  return props.listedLands.map((land) => {
    if (land.landAddress === " " && land.price === " " && land.landID === " ") {
      return;
    }
    if (!land.isLandVerified) {
      return;
    }
    return (
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Body>
          <Card.Text style={{ fontFamily: "monospace" }}> land ID</Card.Text>
          <Card.Title>{land.landID}</Card.Title>
          <Card.Text style={{ fontFamily: "monospace" }}> land Price</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {land.price}
          </Card.Subtitle>
          <Card.Text style={{ fontFamily: "monospace" }}>
            {" "}
            land wallet Address
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {land.landAddress}
          </Card.Subtitle>
          <Card.Text style={{ fontFamily: "monospace" }}>
            {" "}
            land OwnerAddress
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {land.landOwner}
          </Card.Subtitle>
          <Card.Text>This Land is For sale</Card.Text>
          <Button variant="primary" onClick={() => transferEther()}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    );
  });
}

const transferEther = async () => {
  const _abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amt",
          type: "uint256",
        },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "getBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "_to",
          type: "address",
        },
      ],
      name: "transferTo",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "thatPerson",
          type: "address",
        },
      ],
      name: "getDepositedamt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
  ];
  const _address = "0x50Bc6347847D756f80fCBf6106B3B1375236C9c5";
  const _deployedContract = new ethers.Contract(_address, _abi, eth);
  console.log(await _deployedContract.getBalance())
  console.log(_deployedContract);
  let signer = null;

// let provider;
// if (window.ethereum == null) {

//     // If MetaMask is not installed, we use the default provider,
//     // which is backed by a variety of third-party services (such
//     // as INFURA). They do not have private keys installed so are
//     // only have read-only access
//     console.log("MetaMask not installed; using read-only defaults")
//     provider = ethers.getDefaultProvider()

// } else {

//     // Connect to the MetaMask EIP-1193 object. This is a standard
//     // protocol that allows Ethers access to make all read-only
//     // requests through MetaMask.
//     provider = new ethers.BrowserProvider(window.ethereum)

//     // It also provides an opportunity to request access to write
//     // operations, which will be performed by the private key
//     // that MetaMask manages for the user.
//     signer = await provider.getSigner();
//     console.log(signer)
// }
  // _deployedContract.transferTo('0xa8e021b285bd2fcdfe855f3330b7c789eb9dac51')
};



