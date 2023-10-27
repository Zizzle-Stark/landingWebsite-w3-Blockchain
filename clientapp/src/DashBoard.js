import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const DashBoard = () => {
  const listoflandsss = [];
  const navigate = useNavigate();
  const [isLandAdded, setLandAdded] = useState(false);
  const [landDetails, setLandDetails] = useState({
    landAddress: "1",
    landID: "1",
    landlocation: "1",
    price: "1",
    allLatitudeLongitude: "1",
    propertyPID: "1",
    isforSell: "1",
    isLandVerified: "1",
    landOwner: "1",
    isRemoved: "1",
  });
  const handleInput = (event) => {
    setLandDetails({ ...landDetails, [event.target.name]: event.target.value });
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
          <input type="text" name="landLocation" onChange={handleInput} />
          <br />
          <label>Enter your Property ID </label>
          <br />
          <input type="text" name="propertyPID" onChange={handleInput} />
          <br />
          <label>Enter Land Price </label>
          <br />
          <input type="text" name="price" onChange={handleInput} />
          <br />
          <button onClick={() => {console.log(landDetails)}}> Submit</button>
        </form>
      </>
    );
  }

  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button> Visit Market Place</button>
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
          {isLandAdded ? addForm() : null}
        </div>
        {/* {listoflandsss.map((value) => {
          <h3>{value.landAddress}</h3>;
        })} */}
      </main>
    </div>
  );
};
