import React from "react";
import { styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const OverView = styled("div")({
  marginTop: 85,
  width: "100%",
  borderRadius: 20,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#B2BEB5",
  paddingTop: 50,
  paddingLeft: 80,
  paddingRight: 80,
});

const OverViewSingle = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  // justifyContent: "space-around"
});

const IconImage = styled("div")({
  marginRight: 15,
  height: 70,
  width: 70,
});

const Overview = () => {
  return (
    <OverView>
      <Typography variant="h3" sx={{ marginBottom: 5 }}>
        Overview
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              <img
                src="/home-work.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">Apartment</Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              <img
                src="/distance.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">Ponda, Goa</Typography>
          </OverViewSingle>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              <img
                src="/local-police.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">Gated Security</Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              <img
                src="/bathtub.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">Bathroom</Typography>
          </OverViewSingle>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              <img
                src="/door-sliding.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">224 m2</Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={6}>
          <OverViewSingle>
            <IconImage>
              <img
                src="/home-work.svg"
                alt="bathtub"
                style={{ height: "100%", width: "100%" }}
              />
            </IconImage>
            <Typography variant="h5">Gated Security</Typography>
          </OverViewSingle>
        </Grid>
      </Grid>
    </OverView>
  );
};

export default Overview;
