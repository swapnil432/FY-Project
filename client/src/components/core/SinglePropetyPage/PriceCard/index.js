import React from "react";
import { styled, Typography, Button } from "@mui/material";
import BtnButton from "@/components/common/BtnButton/BtnButton";

const PriceCardContainer = styled("div")({
  marginTop: 85,
  width: 400,
  height: 420,
  backgroundColor: "#E9ECFE",
  paddingTop: 50,
  paddingLeft: 40,
  paddingRight: 40,
  borderRadius: 20,
});

const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: 30,
});

const PriceCard = () => {
  return (
    <PriceCardContainer>
      <Typography variant="h4">Apartment#2890</Typography>
      <Typography variant="h6" sx={{ marginTop: 1 }}>
        Owned By: User#1234
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 4 }}>
        Current Price
      </Typography>
      <Typography variant="h3" sx={{ marginTop: 1 }}>
        60.00 ETH
      </Typography>
      <ButtonContainer>
        <BtnButton color={"primary"}>Buy Now</BtnButton>
        <BtnButton color={"secondary"}>Request Documents</BtnButton>
      </ButtonContainer>
    </PriceCardContainer>
  );
};

export default PriceCard;
