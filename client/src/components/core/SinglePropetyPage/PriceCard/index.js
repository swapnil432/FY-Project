import React, { useEffect, useState } from "react";
import { styled, Typography, Button, Grid } from "@mui/material";
import axios from "axios";

const PriceCardContainer = styled("div")({
  marginTop: "5.3rem",
  width: "100%",
  height: "100%",
  backgroundColor: "#E9ECFE",
  paddingTop: "3rem",
  paddingBottom: "3rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  borderRadius: "1.25rem",
  boxShadow: " rgba(149, 157, 165, 0.2) 0px 4px 8px"

});

const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "2rem",
  gap: "1rem",
});

const PriceCard = ({ propertyID, price, owner }) => {
  let user = window.localStorage.getItem("user");
  user = JSON.parse(user);
  const [name, setname] = useState("");

  const getUserNameById = async () => {
    try {
      const response = await axios.get(`/api/getusernames/${owner}`);
      setname(response.data.name);
    } catch (err) {
      console.log(err);
      alert("Something went wrong while fetching user names");
    }
  };

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

  useEffect(() => {
    getUserNameById();
  }, [owner]);

  return (
    <PriceCardContainer>
      <Grid container>
        <Grid item xs={9}>
      <Typography variant="h5" sx={{ marginTop: 1 }}>
        <b>Owner Name:</b> {name}
      </Typography>
      </Grid>
      <Grid item xs={3}>
      <Typography variant="h5" sx={{ marginTop: 1 }}>
        <b>Price:</b> <span style={{fontSize:"30px"}}>{price} </span>ETH
      </Typography>
      </Grid>
      </Grid>
      <Typography variant="h5" sx={{ marginTop: 1 }}>
        <b>Property ID:</b> {propertyID}
      </Typography>
      <Typography variant="h5" sx={{ marginTop: 1 }}>
        <b>Owner ID:</b> {owner}
      </Typography>

      <ButtonContainer>
        <Button onClick={sendOffer} sx={{ padding: 1 }} variant="contained">
          Buy
        </Button>
        <Button sx={{ padding: 1 }} variant="outlined">Request Documents</Button>
      </ButtonContainer>
    </PriceCardContainer>
  );
};

export default PriceCard;
