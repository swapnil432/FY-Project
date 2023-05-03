import React, { useEffect, useState } from "react";
import APDheader from "./APDheader";
import ImageGallery from "./ImageGallery";
import Details from "./Details";
import { styled, Container, Button, Box, TextField } from "@mui/material";
import Carouselpage from "./Carouselpage";
import axios from "axios";
import { mint, getProperty } from "../../../SmartContractFunctions";

const Flex1 = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1rem",
});

const RejectMessage = styled(Box)({
  width: "100%",
  margin: "1rem 0",
  border: "1px solid red",
  borderRadius: "8px",
});

const AdminPropertyDetails = ({
  propertyID,
  showProperty,
  setShowProperty,
}) => {
  const [rows, setRows] = useState([]);
  const [seller, setSeller] = useState("");
  const [rejected, setRejected] = useState(false);
  let gov = window.localStorage.getItem("government");
  gov = JSON.parse(gov);

  const getproperty = () => {
    axios({
      method: "GET",
      url: `/api/getproperty/${propertyID}`,
    })
      .then((response) => {
        // console.log("khohohoho", response.data);
        setRows(response.data);
        setSeller(response.data.owner_public_key);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };
 const approveProperty =() =>{
  axios({
    method: "POST",
    url: `/api/statusApprove/${propertyID}`,
  })
    .then((response) => {
      console.log("approved");
    })
    .catch((err) => {
      console.log(err);
      alert("something wrong");
    });
 }
  const mintNFT = async () => {
    setRejected(false);
    console.log(seller, propertyID, gov.public_key)
    let error = await mint(seller, propertyID, gov.public_key);
    if (error) {
      console.log("error in mint",error)
      alert(error);
    } else {
      approveProperty();
      alert("NFT minted successfully");   
      
      let { result, error } = await getProperty(propertyID);
      if (error) {
        alert("error get prop", error);
      } else {
        // alert("nft minted is: ", result);
        console.log("Nft is", JSON.stringify(result.id))
      }
    }
  };

  useEffect(() => {
    getproperty();
  }, []);
  return (
    <Container sx={{ marginTop: "5rem", marginBottom: "4rem", width: "85%" }}>
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
            onClick={() => setRejected(true)}
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
      {rejected && (
        <RejectMessage>
          <TextField
            multiline={true}
            rows={3}
            fullWidth
            placeholder="Write reason for rejection"
          />
        </RejectMessage>
      )}
      {/* <ImageGallery /> */}
      <Carouselpage propId={propertyID} />
      <Details info={rows} />
    </Container>
  );
};

export default AdminPropertyDetails;
