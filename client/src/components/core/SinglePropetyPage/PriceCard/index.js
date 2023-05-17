import React from "react";
import { styled, Typography, Button } from "@mui/material";
import BtnButton from "@/components/common/BtnButton/BtnButton";

const PriceCardContainer = styled("div")({
  marginTop: '5.3rem',
  width: "50%",
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

const PriceCard = ({propertyID, price, owner}) => {

  const user = window.localStorage.getItem("user")
  user = JSON.parse(user);

   const sellProperty = () => {
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
        console.log(response);
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };

  return (
    <PriceCardContainer>
      <Typography variant="h4">ID: {propertyID}</Typography>
      <Typography variant="h6" sx={{ marginTop: 1 }}>
        Owner: {owner}
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 4 }}>
         Price
      </Typography>
      <Typography variant="h3" sx={{ marginTop: 1 }}>
        {price} ETH
      </Typography>
      <ButtonContainer>
        <BtnButton color={"primary"}>Buy</BtnButton>
        <BtnButton color={"secondary"}>Request Documents</BtnButton>
      </ButtonContainer>
    </PriceCardContainer>
  );
};

export default PriceCard;
