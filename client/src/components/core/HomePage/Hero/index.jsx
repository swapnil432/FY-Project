import React from "react";
import Image from "next/image";
import { Container, Grid, Box, styled, Stack, Button } from "@mui/material";
import mypic from "@/images/images/headerpicture.png";
import BtnButton from "@/components/common/BtnButton/BtnButton";

const Hero = () => {
  return (
    <Container sx={{ marginTop: "8rem" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          xs={6}
          sx={{
            paddingRight: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <h1>Modern NFT Real Estate</h1>
            <Box>
              <p>
                We provide a complete service for the sale, purchase of real
                estate.
              </p>
              <Box sx={{ paddingTop: "1rem" }}>
                <Button variant="contained" sx={{ marginRight: "1rem" }}>
                  Explore
                </Button>
                <Button variant="outlined">Contact</Button>
              </Box>

              {/* <BtnButton color={"primary"}>Explore</BtnButton>
              <BtnButton color={"secondary"}>Contact us</BtnButton> */}
            </Box>
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box sx={{ marginLeft: "auto" }}>
            <Image src={mypic} alt="Logo" width="500" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
