import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import mypic from "@/images/images/image1.jpg";
import axios from "axios";

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

const ImageGallery = ({ propertyID }) => {
  const [newImages, setnewImages] = useState([]);

  const getpropertyImage = () => {
    axios({
      method: "GET",
      url: `/api/getpropertyimages/${propertyID}`,
    })
      .then((response) => {
        setnewImages(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };

  useEffect(() => {
    getpropertyImage();
  }, []);

  return (
    <>
      {newImages.length>0 ? (
        <GalleryImageMain>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {/* <Image
            src={"../../../../images/propertyimages/"}
            relative
            height={"500px"}
            width={"100%"}
          /> */}
              {console.log(newImages)}
              <img
                src={newImages[0].path}
                alt="gallery1"
                style={{ height: "31.2rem", width: "100%", padding: "0", borderRadius:"16px" }}
              />
            </Grid>
            <Grid item xs={3}>
              <Grid item>
                <img
                  src={newImages[1].path}
                  alt="gallery1"
                  style={{ height: "15rem", width: "100%", borderRadius:"16px" }}
                />
                <img
                  src={newImages[2].path}
                  alt="gallery1"
                  style={{ height: "15rem", width: "100%", marginTop: "15px", borderRadius:"16px" }}
                />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid item>
                <img
                  src={newImages[3].path}
                  alt="gallery1"
                  style={{ height: "15rem", width: "100%" , borderRadius:"16px"}}
                />
                <img
                  src={newImages[4]?.path}
                  alt="gallery1"
                  style={{ height: "15rem", width: "100%", marginTop: "15px", borderRadius:"16px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </GalleryImageMain>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default ImageGallery;
