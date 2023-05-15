
import { Container, Grid, Box, styled, Stack } from "@mui/material";
import BtnButton from "@/components/common/BtnButton/BtnButton";
import PropertyCard from "@/components/common/PropertyCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Popularlisting = () => {
  const [rows, setRows] = useState([]);

  const getproperty = () => {
    const allproperties = [];
    axios({
      method: "GET",
      url: `/api/getallpropertieshome`,
    })
      .then((response) => {
        console.log(response.data);
        response.data.map((properties, index) => {
          allproperties.push({
            id: index + 1,
            propId: properties._id,
            name: properties.name,
            address: properties.state,
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
  useEffect(()=>{
    getproperty();
  },[])
  return (
    <Box sx={{ backgroundColor: "#E9ECFE", padding: "3rem 0" }}>
      <Container sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <Grid>
          <h3>Popular listing</h3>
          <Stack sx={{ marginTop: "2rem" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {rows.map((row) => (
                                <Grid item xs={4} key={row.id}>
                                  <Link href={`/propertydetail/${row.propId}`}  >
                                <PropertyCard
                                  name={row.name}
                                  img={`http://localhost:8000/resources/Images/property/${row.images[0].filename}`}
                                  state={row.address}
                                />
                                </Link>
                              </Grid>
                ))}

              {/* <Grid item xs={4}>
                <PropertyCard></PropertyCard>
              </Grid>
              <Grid item xs={4}>
                <PropertyCard></PropertyCard>
              </Grid> */}
            </Grid>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Popularlisting;
