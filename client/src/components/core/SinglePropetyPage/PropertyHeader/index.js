import React from "react";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const PropHeader = styled("div")({
  fontSize: '3rem',
  padding: '0.3rem',
});

const PropertyHeader = ({name}) => {
  return (
    <PropHeader>
      <h3>{name}</h3>
    </PropHeader>
  );
};

export default PropertyHeader;
