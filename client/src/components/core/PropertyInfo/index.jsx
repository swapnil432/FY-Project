import React from "react";
import BtnButton from "@/components/common/BtnButton/BtnButton";
import UploadFile from "@/components/common/UploadFiles";
import { Box, Container, Grid, TextField } from "@mui/material";

const PropertyInfo = () => {
  return (
    <Container sx={{ marginTop: "8rem" }}>
      <h3>Property Details</h3>
      <Grid
        container
        sx={{ marginTop: "2rem", width: "100%" }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Property Address"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Number of Bedroom"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Number of Kitchen"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Property  type"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            hidden
            id="outlined-basic"
            label="Property  price"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />

          <UploadFile>Upload Previous Sale Deed </UploadFile>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Pin Code"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Property  Area"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Number of Bathroom"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Property  Name"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          />
          <UploadFile>Upload Property Images </UploadFile>
        </Grid>
      </Grid>
      <BtnButton color={"primary"}>Submit</BtnButton>
    </Container>
  );
};

export default PropertyInfo;
