import React from "react";
import { styled, Typography, Button } from "@mui/material";
import axios from "axios";

const PriceCardContainer = styled("div")({
  marginTop: "5.3rem",
  width: "53%",
  height: "26.8rem",
  backgroundColor: "#E9ECFE",
  paddingTop: "3rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  borderRadius: "1.25rem",
});

const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "1.8rem",
  gap:"1rem"
});

const PriceCard = ({ propertyID, price, owner }) => {
  let user = window.localStorage.getItem("user");
  user = JSON.parse(user);

  const sendOffer = () => {
    axios({
      method: "POST",
      url: `/api/sellproperty/${propertyID}`,
      data: {
        seller_id: owner,
        buyer_id: user.public_key,
        current_price: price,
      },
    })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };

  return (
    <PriceCardContainer>
      <Typography variant="h5"><b>ID:</b> {propertyID}</Typography>
      <Typography variant="h5" sx={{ marginTop: 1 }}>
        <b>Owner:</b> {owner}
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 4 }}>
        <b>Price</b>
      </Typography>
      <Typography variant="h4" sx={{ marginTop: 1 }}>
        {price} ETH
      </Typography>
      <ButtonContainer>
        <Button onClick={sendOffer} variant="contained">Buy</Button>
        <Button  variant="outlined">Request Documents</Button>
      </ButtonContainer>
    </PriceCardContainer>
  );
};

export default PriceCard;
