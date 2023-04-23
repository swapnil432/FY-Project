import React, { useEffect, useState } from "react";
import APDheader from "./APDheader";
import ImageGallery from "./ImageGallery";
import Details from "./Details";
import { styled, Container, Button, Box } from "@mui/material";
import Carouselpage from "./Carouselpage";
import axios from "axios";
import { mint, getProperty } from "../../../SmartContractFunctions";

const Flex1 = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1rem",
});

const AdminPropertyDetails = ({propertyID,showProperty,setShowProperty}) => {
  const [rows, setRows] = useState([]);
  let seller = "0x819828c80f9843D2E9835F3c485Aa9c768FCa434";
  let gov = window.localStorage.getItem("government");
  gov =  JSON.parse(gov)

  const getproperty = () => {
    axios({
      method: "GET",
      url: `/api/getproperty/${propertyID}`,
    })
      .then((response) => {
        // console.log("khohohoho", response.data);
        setRows(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };
  
  const mintNFT = async ()=>{
    let {error, propID} = await mint(seller, gov.public_key);
    console.log(propID)
    if(error){
      alert(error)
    }
    else{
      alert("NFT minted successfully")
      let {nft, error} = await getProperty(propID);

      if(error){
        alert("error get prop", error)
      }
      else{
        alert("nft minted is: ", JSON.stringify(nft))
      }
      
    }
  }
  useEffect(() => {
    getproperty();
  }, []);
  return (
    <Container sx={{ marginTop: "2rem", marginBottom: "10rem" }}>
      <Flex1>
        <APDheader>{rows.name}</APDheader>
        <Box>
          <Button
            onClick={mintNFT}
            variant="contained"
            color="success"
            sx={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              marginTop: "2.5rem",
              marginRight: "2rem",
            }}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              marginTop: "2.5rem",
            }}
          >
            Reject
          </Button>
        </Box>
      </Flex1>
      {/* <ImageGallery /> */}
      <Carouselpage propId={propertyID} />
      <Details info={rows} />
    </Container>
  );
};

export default AdminPropertyDetails;
