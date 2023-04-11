import React from "react";
import { Box, Container, Grid } from "@mui/material";
import mypic from "@/images/images/image1.jpg";
import Image from "next/image";
import { Height } from "@mui/icons-material";
import Description from "./Description";
import ImageGallery from "./ImageGallery";
import Overview from "./Overview";
import PriceCard from "./PriceCard";
import PropertyHeader from "./PropertyHeader";
const SinglePropetyPage = () => {
  return (
    <Container sx={{ marginTop: "8rem" }}>
      <PropertyHeader />
      <Overview />
      <Description />

      <PriceCard />
    </Container>

    // <Container sx={{ marginTop: "8rem" }}>
    //   <h3>Large 4-room apartment with a beautiful terrace and garden.</h3>
    //   <Grid
    //     container
    //     rowSpacing={1}
    //     columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    //     height="100%"
    //   >
    //     <Grid xs={6}>
    //       <Image src={mypic} alt="Property Image" width="500" />
    //     </Grid>
    //     <Grid
    //       container
    //       xs={6}
    //       rowSpacing={1}
    //       columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    //     >
    //       <Grid xs={6}>
    //         <Image src={mypic} alt="Property Image" width="500" />
    //         <Image src={mypic} alt="Property Image" width="500" />
    //       </Grid>
    //       <Grid xs={6}>
    //         <Image src={mypic} alt="Property Image" width="500" />
    //         <Image src={mypic} alt="Property Image" width="500" />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
};

export default SinglePropetyPage;
