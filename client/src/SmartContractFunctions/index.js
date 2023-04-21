const loadData = async () => {
  window.web3 = new Web3(window.ethereum);
  let account, error;

  try {
    await window.ethereum.enable();
    const web3 = await window.web3;

    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const networkData = RealEstateNFT.networks[networkId];

    account = accounts[0];

    if (networkData) {
      realEstateNFT = new web3.eth.Contract(
        RealEstateNFT.abi,
        networkData.address
      );
      console.log(gov);
    }
  } catch (e) {
    error = e;
  }
  return { account, error };
};


const mint = async (seller, gov) => {
  let error;
    try {
      const result = await realEstateNFT.methods
        .mint(seller)
        .send({ from: gov });
      console.log(result);
      const propertyCount = await realEstateNFT.methods
        .propertyCounter()
        .call();

      console.log(property);
    } catch (e) {
      error = e;
      console.log(err);
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
    } catch (err) {
      setErrorMessage(err);
      console.log(err);
    }
    return error;

  };

  let approveSale = async (propertyId, buyer, seller) => {
    let error
    try {
      const result = await realEstateNFT.methods
        .approveSale(propertyId, buyer)
        .send({ from: seller });
      console.log(result);
    } catch (e) {
      error = e;
      console.log(err);
    }
    return error
  };
  
  const transfer = async (propertyId, buyer, price) => {
    let error
    try {
      const result = await realEstateNFT.methods
        .transfer(propertyId)
        .send({ from: buyer, value: price });
      console.log(result);
    } catch (err) {
      error = e
      console.log(err);
    }
    return error
  };

  const getProperty = async (propertyId) => {
    let error
    try {
      const result = await realEstateNFT.methods
        .getProperty(propertyId)
        .call();
      console.log(result);
    } catch (e) {
      error = e
      console.log(err);
    }
    return {result, error}
  };

  const getTransaction = async (propertyId) => {
    let error
    try {
      const result = await realEstateNFT.methods
        .getTransaction(propertyId)
        .call();
      console.log(result);
    } catch (e) {
      error = e
      console.log(err);
    }
    return {result, error}
  };

  const MakePropertyInvalid = async (propertyId) => {
    let error
    try {
      const result = await realEstateNFT.methods
        .destroyProperty(propertyId)
        .call();
      console.log(result);
    } catch (e) {
      error = e
      console.log(err);
    }
    return  error
  };

  const MakePropertyValid = async (propertyId) => {
    let error
    try {
      const result = await realEstateNFT.methods
        .destroyProperty(propertyId)
        .call();
      console.log(result);
    } catch (e) {
      error = e
      console.log(err);
    }
    return  error
  };