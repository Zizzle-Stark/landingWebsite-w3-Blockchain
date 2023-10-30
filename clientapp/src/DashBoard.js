import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import addLandtoStorage from "./setLocalStorage";
import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

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

  return (
    <div className="tags">
      <h1 className="text-center">Profile Access</h1>
      <h3>{username}</h3>
      <h4>{userData.email}</h4>
    </div>
  );
}

function YourLand(props) {
  const lands = JSON.parse(localStorage.getItem("listOfLands")) || [];
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

  return isLand ? (
    <React.Fragment>
      <h2>Your Land</h2>
      <table className="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th>Land Address</th>
            <th>Land ID</th>
            <th>Land Location</th>
            <th>Property ID</th>
            <th className="text-right">Is Land Verified</th>
          </tr>
        </thead>
        <tbody>
          {toDisplay.map((land) => (
            <tr key={land.landID}>
              <td>{land.landAddress}</td>
              <td>{land.landID}</td>
              <td>{land.landlocation}</td>
              <td>{land.propertyPID}</td>
              <td className="text-right">{land.isVerified ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  ) : (
    <h1>No Asset yet</h1>
  );
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

  const moveMarketplace = () => {
    if (username !== " ") {
      navigate(`/marketPlace/${username}`);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    landDetails.isLandVerified = false;
    landDetails.isRemoved = false;
    landDetails.isforSell = true;
    landDetails.allLatitudeLongitude = 1000;
    landDetails.landOwner = username;
    Object.keys(landDetails).forEach((key) => {
      if (landDetails[key] === " ") {
        setError(true);
      }
    });
    addLandtoStorage(landDetails);
    window.location.reload();
  };

  function addForm() {
    return (
      <form>
        <div className="form-group">
          <label>Enter your Land wallet Address</label>
          <input
            type="text"
            className="form-control"
            name="landAddress"
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label>Enter your Land ID</label>
          <input
            type="text"
            className="form-control"
            name="landID"
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label>Enter your Land Location</label>
          <input
            type="text"
            className="form-control"
            name="landlocation"
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label>Enter your Property ID</label>
          <input
            type="text"
            className="form-control"
            name="propertyPID"
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label>Enter Land Price</label>
          <input
            type="text"
            className="form-control"
            name="price"
            onChange={handleInput}
          />
        </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
        </div>
      </form>
    );
  }

  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button
          className="btn btn-secondary"
          onClick={() => moveMarketplace()}
        >
          Visit Market Place
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
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

      <main role="main" className="container mt-5">
        <div className="container">
        <ProfileInfo value={username} />
          {!isLandAdded ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                setLandAdded(true);
              }}
            >
              Add Land
            </button>
          ) : null}
          {isLandAdded ? addForm() : null}
          {isError ? <h1>Move To Market Place</h1> : null}
        </div>
        <div>
          Your Digital Asset
          <YourLand value={username} /> 
        </div>
      </main>
    </div>
  );
};