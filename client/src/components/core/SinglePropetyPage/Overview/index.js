import React from "react";
import { styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";

const OverView = styled("div")({
  marginTop: "5.3rem",
  width: "47%",
  borderRadius: "1.25rem",
  borderStyle: "solid",
  borderWidth: "0.06rem",
  borderColor: "#B2BEB5",
  paddingTop: "3.1rem",
  paddingLeft: "5rem",
  paddingRight: "5rem",
});

const OverViewSingle = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  // justifyContent: "space-around"
});

const IconImage = styled("div")({
  marginRight: "0.9rem",
  height: "2.3rem",
  width: "2.3rem",
});

const Overview = ({area, bathroom, bedroom, state}) => {
  return (
    <OverView>
      {/* <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Overview
      </Typography> */}
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              {/* <img
                src="/home-work.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              /> */}
              <HomeOutlinedIcon
                sx={{ color: "#3859F7", height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">Furnished</Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              {/* <img
                src="/distance.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              /> */}
              <LocationOnOutlinedIcon
                sx={{ color: "#3859F7", height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">{state}</Typography>
          </OverViewSingle>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              <BathtubOutlinedIcon
                sx={{ color: "#3859F7", height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">{bedroom} bedroom</Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              <BathtubOutlinedIcon
                sx={{ color: "#3859F7", height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">{bathroom} Bathroom</Typography>
          </OverViewSingle>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              {/* <img
                src="/door-sliding.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              /> */}
              <SquareFootIcon
                sx={{ color: "#3859F7", height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">{area} sqmt</Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              {/* <img
                src="/home-work.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              /> */}
              <OpacityOutlinedIcon
                sx={{ color: "#3859F7", height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">Floor no. 3</Typography>
          </OverViewSingle>
        </Grid>
      </Grid>
    </OverView>
  );
};

export default Overview;
