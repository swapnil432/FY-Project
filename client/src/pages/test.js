
import React, { Component } from "react";
import RealEstateNFT from "../../../build/contracts/RealEstateNFT.json"

const Test = () => {

let loadData = async () => {
    const web3 = await window.web3;
    //load account
    // console.log(web3)
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = RealEstateNFT.networks[networkId];
}

  return (
    <div>Test</div>
  )
}



export default Test