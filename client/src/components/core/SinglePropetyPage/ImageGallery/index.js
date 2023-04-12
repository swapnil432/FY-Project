import React from "react";
import { styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import mypic from "@/images/images/image1.jpg";

const GalleryImageMain = styled("div")({
  marginTop: "4rem",
  height: "31.2rem",
  padding: 0,
});

// const GalleryImage1 = styled('span')({
//   margin: 0,
//   height: 450,
//   width: 545
// });

const ImageGallery = () => {
  return (
    <GalleryImageMain>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {/* <Image
            src={"../../../../images/propertyimages/"}
            relative
            height={"500px"}
            width={"100%"}
          /> */}
          <img
            src="/rectangle-105@2x.jpeg"
            alt="gallery1"
            style={{ height: "31.2rem", width: "100%", padding: "0" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Grid item>
            <img
              src="/rectangle-106@2x.jpeg"
              alt="gallery1"
              style={{ height: "15rem", width: "100%" }}
            />
            <img
              src="/rectangle-107@2x.jpeg"
              alt="gallery1"
              style={{ height: "15rem", width: "100%", marginTop: "15px" }}
            />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid item>
            <img
              src="/rectangle-108@2x.jpeg"
              alt="gallery1"
              style={{ height: "15rem", width: "100%" }}
            />
            <img
              src="/rectangle-109@2x.jpeg"
              alt="gallery1"
              style={{ height: "15rem", width: "100%", marginTop: "15px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </GalleryImageMain>
  );
};

export default ImageGallery;
