import React from "react";
import { styled, Box, Button } from "@mui/material";
import axios from "axios";

const Info = styled("div")({
  marginTop: "5rem",
});

const SubInfo = styled("div")({
  marginTop: "1.5rem",
});

const Details = (props) => {
  const id = props.info._id;
  const downloadDocs = () => {
    axios({
      method: 'GET',
      url: `/api/createZipFile/${id}`,
      responseType: 'arraybuffer', // Set the response type to 'arraybuffer'
    })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/zip' }); // Create a blob from the response data
        const url = window.URL.createObjectURL(blob); // Create a URL for the blob
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `Property-${id}.zip`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Remove the link element after download
        window.URL.revokeObjectURL(url); // Release the object URL
        alert('Download complete');
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong');
      });
  };
  

  return (
    <Box>
      <Info>
        <SubInfo>
          <b>Type:</b> {props.info.type}
        </SubInfo>

        <SubInfo>
          <b>Price:</b> {props.info.price} ETH
        </SubInfo>

        <SubInfo>
          <b>State:</b> {props.info.state}
        </SubInfo>

        <SubInfo>
          <b>Full Name:</b> {props.info.name}
        </SubInfo>

        <SubInfo>
          <b>Bathroom:</b> {props.info.bathroom}
        </SubInfo>

        <SubInfo>
          <b>Bedroom:</b> {props.info.bedroom}
        </SubInfo>

        <SubInfo>
          <b>kitchen:</b> {props.info.kitchen}
        </SubInfo>

        <SubInfo>
          <b>Area:</b> {props.info.area} sq m
        </SubInfo>

        <SubInfo>
          <b>Pincode:</b> {props.info.pincode}
        </SubInfo>

        <SubInfo sx={{ marginBottom: "2rem" }}>
          <b>Address:</b> {props.info.address}
        </SubInfo>
      </Info>    
      <Button
        variant="contained"
        onClick={() => {
          downloadDocs();
        }}
        sx={{ paddingLeft: "2rem", paddingRight: "2rem", marginTop: "2.5rem" }}
      >
        Download Document
      </Button>
    </Box>
  );
};

export default Details;
