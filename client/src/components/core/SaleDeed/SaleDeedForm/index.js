import React from 'react'
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { Label } from '@mui/icons-material';

const SDform = () => {
  return (
    <Box>
        <Container sx={{ marginTop: "3rem" }}>
        
        <TextField
              id="outlined-basic"
              label="Agreed Price"
              variant="outlined"
              sx={{ width: "60%" }}
        />

        <TextField
              id="outlined-basic"
              label="Seller ID"
              variant="outlined"
              sx={{ marginTop: '2.5rem', width: "60%" }}
        />

        <TextField
              id="outlined-basic"
              label="Buyer ID"
              variant="outlined"
              sx={{ marginTop: '2.5rem', width: "60%" }}
        />

        <TextField
              id="outlined-basic"
              label="Property ID"
              variant="outlined"
              sx={{ marginTop: '2.5rem', marginBottom: '4rem', width: "60%" }}
        />
        </Container>
        <Button variant="contained" sx={{ paddingLeft: '2rem', paddingRight: '2rem'}}>
          Sign and Send Sale Deed
        </Button>
    </Box>
  )
}

export default SDform