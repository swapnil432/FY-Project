import { getAllProperties, loadData } from '@/SmartContractFunctions';
import { Box, Container, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'

const MainDiv = styled(Box)(({ theme }) => ({
  marginTop:"6rem",
  minHeight:"100vh"
}));

const PropDiv = styled(Box)(({ theme }) => ({
  margin:"1rem 0"
}));

const test = () => {
  const [properties, setproperties] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let { account, error:loadDataError } = await loadData();
      let {result, error} = await getAllProperties();
      if (error) {
        alert("Error occured: ", error);
        return;
      } else{
        setproperties(result)
        console.log(result)
      }
    };
  
    fetchData();
  

  }, [])

//   approvedBuyer
// : 
// "0x0000000000000000000000000000000000000000"
// id
// : 
// "6439895bf2c3b5ee05efe767"
// isValid
// : 
// true
// owner
// : 
// "0x819828c80f9843D2E9835F3c485Aa9c768FCa434"
// price
// : 
// "0"
// tax
// : 
// "0"
  return (
    <Container>
      <MainDiv>
      {properties.map((property, index)=>(
        <PropDiv key={index}>
          <p> Id: {property.id}</p>
          <p> IsValid: {property.isValid.toString()}</p>
          <p> Price: {property.price}</p>
          <p> Tax: {property.tax}</p>
          <p>Approved Buyer: {property.approvedBuyer}</p>

        </PropDiv>
      ))}
      </MainDiv>
    </Container>
  )
}

export default test