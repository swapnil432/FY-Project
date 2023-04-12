import React from "react";
import { styled, Typography, Button } from "@mui/material";
import BtnButton from "@/components/common/BtnButton/BtnButton";

const PriceCardContainer = styled("div")({
  marginTop: '5.3rem',
  width: '26rem',
  height: "26.8rem",
  backgroundColor: "#E9ECFE",
  paddingTop: '3rem',
  paddingLeft: '2.5rem',
  paddingRight: '2.5rem',
  borderRadius: '1.25rem',
});

const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: '1.8rem',
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
