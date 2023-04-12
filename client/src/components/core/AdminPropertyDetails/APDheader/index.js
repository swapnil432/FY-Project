import React from 'react'
import { styled, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const AdminPDheader = () => {
  return (
    <Box>
        <Typography variant='subtitle1' sx={{ marginBottom: '1rem'}}>PROPERTY DETAILS</Typography>
        <Typography variant='h3'>Property Name</Typography>
    </Box>
  )
}

export default AdminPDheader