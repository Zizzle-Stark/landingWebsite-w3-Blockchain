import React, { useState } from "react";
import Web3 from "web3";
import {Form, Button, Row, Col, Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function AddUserForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isUserVerified, setIsUserVerified] = useState(false);
  const navigate = useNavigate()

  async function addUserToContract() {
    navigate('/marketPlace')
    // Connect to the Ethereum network using Web3
    // const web3 = new Web3(window.ethereum);
    // const accounts = await web3.eth.getAccounts();

    // // Instantiate the smart contract
    // const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your actual contract address
    // const contractABI = [YOUR_CONTRACT_ABI]; // Replace with your actual contract ABI
    // const contract = new web3.eth.Contract(contractABI, contractAddress);

    // // Call the addUser function on the smart contract
    // await contract.methods
    //   .addUser(
    //     id,
    //     name,
    //     age,
    //     city,
    //     aadharNumber,
    //     panNumber,
    //     email,
    //     isUserVerified
    //   )
    //   .send({ from: accounts[0] });

    // // Reset the form
    // setId("");
    // setName("");
    // setAge(0);
    // setCity("");
    // setAadharNumber("");
    // setPanNumber("");
    // setEmail("");
    // setIsUserVerified(false);

    // You can add additional logic here after the user is added.
  }

  return (
    <Container>
      <h2>Add User</h2>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="aadharNumber">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                type="text"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="panNumber">
              <Form.Label>PAN Number</Form.Label>
              <Form.Control
                type="text"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="isUserVerified">
          <Form.Check
            type="checkbox"
            label="Is User Verified"
            checked={isUserVerified}
            onChange={() => setIsUserVerified(!isUserVerified)}
          />
        </Form.Group>
        <Button variant="primary" onClick={addUserToContract}>
          Add User
        </Button>
      </Form>
    </Container>
  );
}

export default AddUserForm;
