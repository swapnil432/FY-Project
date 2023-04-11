import React from "react";
import Image from "next/image";
import mypic from "@/images/images/About.png";
import { Container, Grid, Box, styled, Stack } from "@mui/material";
import BtnButton from "@/components/common/BtnButton/BtnButton";
const About = () => {
  return (
    <Box sx={{ padding: "3rem 0" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Box sx={{ marginLeft: "auto" }}>
              <Image src={mypic} alt="Logo" width="500" />
            </Box>
          </Grid>
          <Grid
            xs={6}
            sx={{
              paddingRight: 4,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ padding: "0 3rem" }}>
              <h3>About</h3>
              <Box sx={{ marginTop: "2rem" }}>
                <p>
                  We are a company that connects the world of real estate and
                  finance. We provide a complete service for the sale, purchase
                  or rental of real estate. Our advantage is more than 15 years
                  of experience and soil in attractive locations in Slovakia
                  with branches in Bratislava and Košice.
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
