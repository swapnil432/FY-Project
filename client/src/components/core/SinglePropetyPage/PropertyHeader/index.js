import React from "react";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const PropHeader = styled("div")({
  fontSize: 48,
  padding: 5,
});

const PropertyHeader = () => {
  return (
    <PropHeader>
      <h3> Large 4-Room Apartment with a beautiful terrace and garden</h3>
    </PropHeader>
  );
};

export default PropertyHeader;
