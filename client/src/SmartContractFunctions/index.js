import RealEstateNFT from "../../../SmartContracts/build/contracts/RealEstateNFT";
import Web3 from "web3";

let realEstateNFT;

const loadData = async () => {
  window.web3 = new Web3(window.ethereum);
  let account, error;

  try {
    await window.ethereum.enable();
    const web3 = await window.web3;

    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const networkData = RealEstateNFT.networks[networkId];
    console.log("/////////////////////", networkData)
    account = accounts[0];

    if (networkData) {
      realEstateNFT = new web3.eth.Contract(
        RealEstateNFT.abi,
        networkData.address
      );
    }
  } catch (e) {
    error = e;
  }
  return { account, error };
};

const mint = async (seller, propertyId, gov) => {
  let error;
  try {
    const result = await realEstateNFT.methods.mint(seller, propertyId).send({ from: gov });
    console.log("NFT minted Result",result);

  } catch (e) {
    error = e;
    console.log(e);
  }
  return error;
};

const changePrice = async (propertyId, price, seller) => {
  let error;
  try {
    const result = await realEstateNFT.methods
      .changePrice(propertyId, price)
      .send({ from: seller });
    console.log(result);
  } catch (e) {
    error = e;
    console.log(e);
  }
  return error;
};

let approveSale = async (propertyId, buyer, seller) => {
  let error;
  try {
    const result = await realEstateNFT.methods
      .approveSale(propertyId, buyer)
      .send({ from: seller });
    console.log(result);
  } catch (e) {
    error = e;
    console.log(e);
  }
  return error;
};

const transfer = async (propertyId, buyer, price) => {
  let error;
  try {
    const result = await realEstateNFT.methods
      .transfer(propertyId)
      .send({ from: buyer, value: price });
    console.log(result);
  } catch (e) {
    error = e;
    console.log(e);
  }
  return error;
};

const getProperty = async (propertyId) => {
  let error, result;
  try {
    result = await realEstateNFT.methods.getProperty(propertyId).call();
    console.log("Get Property Result",result);
  } catch (e) {
    error = e;
    console.log(e);
  }
  return { result, error };
};

const getAllProperties = async () => {
  let error, result;
  try {
    result = await realEstateNFT.methods.showAllProperties().call();
    console.log("Get All Property Result",result);
  } catch (e) {
    error = e;
    console.log("getallprops error ",e);
  }
  return { result, error };
};

const getTransaction = async (propertyId) => {
  let error, result;
  try {
    result = await realEstateNFT.methods.getTransaction(propertyId).call();
    console.log(result);
  } catch (e) {
    error = e;
    console.log(e);
  }
  return { result, error };
};

const MakePropertyInvalid = async (propertyId) => {
  let error;
  try {
    const result = await realEstateNFT.methods
      .destroyProperty(propertyId)
      .call();
    console.log(result);
  } catch (e) {
    error = e;
    console.log(e);
  }
  return error;
};

const MakePropertyValid = async (propertyId) => {
  let error;
  try {
    const result = await realEstateNFT.methods.makeValid(propertyId).call();
    console.log(result);
  } catch (e) {
    error = e;
    console.log(e);
  }
  return error;
};

export {
  loadData,
  mint,
  changePrice,
  approveSale,
  transfer,
  getProperty,
  getAllProperties,
  getTransaction,
  MakePropertyValid,
  MakePropertyInvalid,
};
