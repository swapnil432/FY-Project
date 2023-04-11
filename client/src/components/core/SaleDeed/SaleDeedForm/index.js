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
              sx={{ marginTop: '0.37rem', width: "60%" }}
        />

        <TextField
              id="outlined-basic"
              label="Buyer ID"
              variant="outlined"
              sx={{ marginTop: '0.37rem', width: "60%" }}
        />

        <TextField
              id="outlined-basic"
              label="Property ID"
              variant="outlined"
              sx={{ marginTop: '0.37rem', marginBottom: '0.5rem', width: "60%" }}
        />
        </Container>
        <Button variant="contained" sx={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', marginBottom: '0.25rem' }}>
          Sign and Send Sale Deed
        </Button>
    </Box>
  )
}

export default SDform