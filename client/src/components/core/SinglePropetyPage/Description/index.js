import React from "react";
import { styled, Typography } from "@mui/material";

const DescriptionContainer = styled("div")({
  marginTop: "5rem",
  borderRadius: "1.25rem",
  borderStyle: "solid",
  borderWidth: "0.06rem",
  borderColor: "#B2BEB5",
  paddingTop: "3.1rem",
  paddingLeft: "5rem",
  paddingRight: "5rem",
  paddingBottom: "3.1rem",
  marginBottom: "5rem"
});

const Description = () => {
  return (
    <DescriptionContainer>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Description
      </Typography>
      <Typography variant="body1">
      It's a new launch property where you can have 2 bhk or 3 bhk with 3 club house
      </Typography>
    </DescriptionContainer>
  );
};

export default Description;
