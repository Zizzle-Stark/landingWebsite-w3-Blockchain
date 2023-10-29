import { ethers } from "ethers";
import { useState } from "react";
const eth = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV')
const ListOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];

export default function ListedLand() {
  const [isListedLand, setListedLand] = useState(false);
  const [blockNum, setBlockNum] = useState("");
  return (
    <div>
      <h1>Market Place</h1>
      <>
        <ListedLands listedLands={ListOfLands} setBlockNum = {setBlockNum} />
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
    return (
      <>
        <h1>{land.landAddress}</h1>
        <h2> {land.price}</h2>
        <button
          onClick={async () => {
            props.setBlockNum (await eth.getBlockNumber());
          }}
        >
          {" "}
          Buy Land
        </button>
      </>
    );
  });
}
