import {
  Typography,
  CardMedia,
  styled,
  CardContent,
  Card,
  Button,
  Box,
  Container,
} from "@mui/material";
import Title from "../Title";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PropertyVerify = ({ setPropertyID, showProperty, setShowProperty }) => {
  const [rows, setRows] = useState([]);

  const getproperty = () => {
    const allproperties = [];
    axios({
      method: "GET",
      url: `/api/getallproperties`,
    })
      .then((response) => {
        console.log(response.data);
        response.data.map((properties, index) => {
          allproperties.push({
            id: index + 1,
            propId: properties._id,
            name: properties.name,
            address: properties.address,
            price: properties.price,
            images: properties.images,
          });
        });
        setRows(allproperties);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };

  useEffect(() => {
    getproperty();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Title>Property Verification</Title>
      {rows.map((row) => (
        <Container sx={{ marginTop: "2rem", width: "100% " }}>
          {console.log(`${row.images[0].destination}/${row.images[0].filename}`)}
          <Card
            sx={{ display: "flex", minHeight: "12rem", width: "100%" }}
            key={row.id}
          >
            <CardMedia
              component="img"
              sx={{ width: "20rem", height:"20rem", marginRight: "3rem", objectFit:"cover" }}
              image={`http://localhost:8000/resources/Images/property/${row.images[0].filename}`}
              alt="property"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <h4>{row.name}</h4>
                <div className="p-h6" style={{ margin: "1rem 0" }}>
                  {row.address}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div  style={{
                    fontFamily:"roboto",
                    fontSize: "34px",
                    fontWeight: "600",
                  }}> {row.price} ETH</div>
                </div>

                <Button
                  onClick={() => {
                    setShowProperty(true);
                    setPropertyID(row.propId);
                  }}
                  variant="contained"
                  sx={{
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                    height: "2.5rem",
                    marginTop: "1.5rem",
                  }}
                >
                  View Offer
                  {/* {row.propId} */}
                </Button>
              </CardContent>
            </Box>
          </Card>
        </Container>
      ))}
    </div>
  );
};

export default PropertyVerify;
