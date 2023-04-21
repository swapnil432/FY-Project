import React from "react";
import { styled, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const AdminPDheader = ({ children }) => {
  return (
    <Box>
      <Typography variant="subtitle1">PROPERTY DETAILS</Typography>
      <h3>{children}</h3>
    </Box>
  );
};

export default AdminPDheader;
