import React from "react";
import { Box } from "@mui/material";


const AdminPDheader = ({ children }) => {
  return (
    <Box>
      <h3>{children}</h3>
    </Box>
  );
};

export default AdminPDheader;
