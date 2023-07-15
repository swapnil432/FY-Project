import React from "react";
import { Box } from "@mui/material";


const AdminPDheader = ({ children }) => {
  return (
    <Box  sx={{maxWidth:"70%"}}>
      <h4>{children}</h4>
    </Box>
  );
};

export default AdminPDheader;
