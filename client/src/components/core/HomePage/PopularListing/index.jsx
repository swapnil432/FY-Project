import React from "react";
import { Container, Grid, Box, styled, Stack } from "@mui/material";
import BtnButton from "@/components/common/BtnButton/BtnButton";
import PropertyCard from "@/components/common/PropertyCard";

const Popularlisting = () => {
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
              <Grid item xs={4}>
                <PropertyCard></PropertyCard>
              </Grid>
              <Grid item xs={4}>
                <PropertyCard></PropertyCard>
              </Grid>
              <Grid item xs={4}>
                <PropertyCard></PropertyCard>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Popularlisting;
