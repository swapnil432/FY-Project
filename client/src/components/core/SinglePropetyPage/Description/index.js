import React from "react";
import { styled, Typography } from "@mui/material";


const DescriptionContainer = styled("div")({
  marginTop: "5rem",
  borderRadius: "1.25rem",
  borderStyle: "solid",
  borderWidth: "0.06rem",
  borderColor: "#B2BEB5",
  paddingTop: "3.1rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingBottom: "3.1rem",
  marginBottom: "5rem",
  boxShadow: " rgba(149, 157, 165, 0.2) 0px 4px 8px"

});



const Description = ({description}) => {
  return (
    <DescriptionContainer>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Description
      </Typography>
      <Typography variant="body1">
      {description}
      </Typography>

    </DescriptionContainer>
  );
};

export default Description;
