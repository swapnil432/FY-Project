import React, { Component, useState } from "react";
import RealEstateNFT from "../../../SmartContracts/build/contracts/RealEstateNFT";
import { Box, Button, Typography } from "@mui/material";
import Web3 from "web3";

const Test = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const seller = "0x58EB1D98Fff2d6faa5700cB09E76A197269201A8";
  const buyer = "0x503bB2b0044665C76F8B0496280c4288F83fd5Af";
  const price = "5000000000000000000";

  let realEstateNFT;
  let gov;

  let loadData = async () => {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const web3 = await window.web3;

    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const networkData = RealEstateNFT.networks[networkId];

    gov = accounts[0];
    if (networkData) {
      realEstateNFT = new web3.eth.Contract(
        RealEstateNFT.abi,
        networkData.address
      );
      console.log(gov);
    }
  };

  let mint = async () => {
    try {
      const result = await realEstateNFT.methods
        .mint(seller)
        .send({ from: gov });
      console.log(result);
      const propertyCount = await realEstateNFT.methods
        .propertyCounter()
        .call();

      console.log(property);
    } catch (err) {
      setErrorMessage(err);
      console.log(err);
    }
  };

  let changePrice = async (propertyId, price) => {
    try {
      const result2 = await realEstateNFT.methods
        .changePrice(propertyId, price)
        .send({ from: seller });
      console.log(result2);
    } catch (err) {
      setErrorMessage(err);
      console.log(err);
    }
  };

  let approveSale = async (propertyId) => {
    try {
      const result4 = await realEstateNFT.methods
        .approveSale(propertyId, buyer)
        .send({ from: seller });
      console.log(result4);
    } catch (err) {
      setErrorMessage(err);
      console.log(err);
    }
  };

  let transfer = async (propertyId) => {
    try {
      const result3 = await realEstateNFT.methods
        .transfer(propertyId)
        .send({ from: buyer, value: "5000000000000000000" });
      console.log(result3);
    } catch (err) {
      setErrorMessage(err);
      console.log(err);
    }
  };

  let getFinalData = async () => {
    const property = await realEstateNFT.methods.getProperty(0).call();
    console.log(property);
    const transaction = await realEstateNFT.methods.getTransaction(0).call();
    console.log(transaction);
  };

  return (
    <Box sx={{ marginTop: "10rem" }}>
      <Button onClick={loadData}>Click Load Data</Button>
      {/* {errorMessage && <Typography>{errorMessage}</Typography>} */}
      <Button onClick={() => mint()}>Click mint</Button>
      <Button onClick={() => changePrice(0, "5000000000000000000")}>
        Click Change Price
      </Button>
      <Button onClick={() => approveSale(0)}>Click Approve Sale</Button>
      <Button onClick={() => transfer(0)}>Click Transfer</Button>
      <Button onClick={() => getFinalData()}>Get Data</Button>
    </Box>
  );
};

export default Test;
