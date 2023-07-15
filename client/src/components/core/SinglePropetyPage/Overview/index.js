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
  width: "100%",
  borderRadius: "1.25rem",
  borderStyle: "solid",
  borderWidth: "0.06rem",
  borderColor: "#B2BEB5",
  paddingTop: "3rem",
  paddingBottom: "2rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  boxShadow: " rgba(149, 157, 165, 0.2) 0px 4px 8px"

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

const Overview = ({ surveyNumber, area, bathroom, bedroom,noOfParking,ageOfBuilding,maintenanceCharges, city, state }) => {
  return (
    <OverView>
      {/* <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Overview
      </Typography> */}
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>Survey No</strong>: {surveyNumber}
            </Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>City</strong>: {city}
            </Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>State</strong>: {state}
            </Typography>
          </OverViewSingle>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>Bedrooms</strong>: {bedroom}
            </Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>Bathrooms</strong>: {bathroom}
            </Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>Parking </strong>: {noOfParking}
            </Typography>
          </OverViewSingle>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>Built Up Area</strong>: {area}
            </Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>Maintenance</strong> : {maintenanceCharges}/-
            </Typography>
          </OverViewSingle>
        </Grid>
        <Grid item xs={4}>
          <OverViewSingle>
            <Typography variant="h6">
              <strong>Building Age</strong>: {ageOfBuilding}
            </Typography>
          </OverViewSingle>
        </Grid>
      </Grid>


    </OverView>
  );
};

export default Overview;
