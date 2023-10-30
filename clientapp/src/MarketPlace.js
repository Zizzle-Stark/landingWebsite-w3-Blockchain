import { ethers } from "ethers";
import "./login.css";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
const eth = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV')
const ListOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];

export default function ListedLand() {
  const [isListedLand, setListedLand] = useState(false);
  const navigate = useNavigate()
  const [blockNum, setBlockNum] = useState("");
  const urlParam = useParams()
  const moveDashBoard = () => {
    console.log('sdf')
    console.log(urlParam)
    if(!urlParam.username == " "){
      navigate(`/dashboard/${urlParam.username}`)
    }else{
      navigate('/login')
    }
  }
  return (
    <div className="container center">
      <h1 className="text-center">Market Place</h1>
      <div className="text-center">
      <button onClick={() => moveDashBoard()} className="btn btn-primary"> Go to DashBoard</button>
      </div>
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
    if(!land.isLandVerified){
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
