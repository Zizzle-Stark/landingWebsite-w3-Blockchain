import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import addLandtoStorage from "./setLocalStorage";

function ProfileInfo(props) {
  const username = props.value;
  const userData = JSON.parse(localStorage.getItem("user"))
    .filter((fetchvalue) => {
      if (fetchvalue.name === username) {
        return true;
      }
      return false;
    })
    .pop();
  console.log(userData);
  return (
    <div className="tags">
      <h1>Profile Access </h1>
      <h3> {username}</h3>
      <h4> {userData.email}</h4>
    </div>
  );
}

function YourLand(props) {
  const lands = JSON.parse(localStorage.getItem("listOfLands")) || []
  let isLand = false;
  const toDisplay = lands.filter((land) => {
    if (land.landOwner === undefined) {
      return false;
    }
    if (land.landOwner === props.value) {
      isLand = true;
      return true;
    }
    return false;
  });
  console.log(toDisplay);
  return isLand
    ? toDisplay.map((toDisplayLad) => {
        return (
          <h1>
            {toDisplayLad.landAddress}
            <br />
            {toDisplayLad.landID}
          </h1>
        );
      })
    : (()=> <h1> No Asset yet</h1>)() ;
}

export const DashBoard = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [isLandAdded, setLandAdded] = useState(false);
  const [isError, setError] = useState(false);
  const [landDetails, setLandDetails] = useState({
    landAddress: " ",
    landID: " ",
    landlocation: " ",
    price: " ",
    allLatitudeLongitude: " ",
    propertyPID: " ",
    isforSell: " ",
    isLandVerified: " ",
    landOwner: " ",
    isRemoved: " ",
  });
  const handleInput = (event) => {
    setLandDetails({ ...landDetails, [event.target.name]: event.target.value });
  };

  useEffect(() => {
  },) ;

  const handleClick = (event) => {
    event.preventDefault();
    landDetails.isLandVerified = false;
    landDetails.isRemoved = false;
    landDetails.isforSell = true;
    landDetails.allLatitudeLongitude = 1000;
    landDetails.landOwner = username;
    Object.keys(landDetails).map((key) => {
      console.table(landDetails);
      if (landDetails[key] === " ") {
        setError(true);
      }
      return;
    });
    addLandtoStorage(landDetails);
    window.location.reload()
  };
  function addForm() {
    return (
      <>
        <form>
          <br />
          <label>Enter your Land wallet Address</label>
          <br />
          <input type="text" name="landAddress" onChange={handleInput} />
          <br />
          <label>Enter your Land ID</label>
          <br />
          <input type="text" name="landID" onChange={handleInput} />
          <br />
          <label>Enter your Land Location</label>
          <br />
          <input type="text" name="landlocation" onChange={handleInput} />
          <br />
          <label>Enter your Property ID </label>
          <br />
          <input type="text" name="propertyPID" onChange={handleInput} />
          <br />
          <label>Enter Land Price </label>
          <br />
          <input type="text" name="price" onChange={handleInput} />
          <br />
          <button onClick={handleClick}>Submit</button>
        </form>
      </>
    );
  }

  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button onClick={() => {}}>Visit Market Place</button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="# "
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" class="container mt-5">
        <div class="container">
          {!isLandAdded ? (
            <button
              onClick={() => {
                setLandAdded(true);
              }}
            >
              Add Land
            </button>
          ) : null}
          <ProfileInfo value={username} />
          {isLandAdded ? addForm() : null}
          {isError ? <h1>Move To Market Place</h1> : null}
        </div>
        <div>
          Your Digital Assest
          <YourLand value={username} />
        </div>
      </main>
    </div>
  );
};
