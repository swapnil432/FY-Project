import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled, Button, Container } from '@mui/material';

const SellerOfferCard = () => {
  return (
    <Container sx={{ marginTop: '3rem' }}>
      <Card sx={{ display: 'flex', height: '16rem', width: '70%'}}>
        <CardMedia
          component="img"
          sx={{ width: "20rem", marginRight: "3rem" }}
          image="/rectangle114.png"
          alt="property"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: '0.5rem'}}>
              Apartment#2800
            </Typography>
            <Typography variant="h3" component="div">
              51 ETH
            </Typography>
            <Button variant="contained" sx={{ paddingLeft: '3rem', paddingRight: '3rem', height: '3rem', marginTop: '3rem'}}>
              View Offer
          </Button>
          </CardContent>
        </Box>
        
      </Card>

      <Card sx={{ display: 'flex', height: '16rem', width: '70%', marginTop: '4rem'}}>
        <CardMedia
          component="img"
          sx={{ width: "20rem", marginRight: "3rem" }}
          image="/rectangle114.png"
          alt="property"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: '0.5rem'}}>
              Apartment#2800
            </Typography>
            <Typography variant="h3" component="div">
              51 ETH
            </Typography>
            <Button variant="contained" sx={{ paddingLeft: '3rem', paddingRight: '3rem', height: '3rem', marginTop: '3rem'}}>
              View Offer
          </Button>
          </CardContent>
        </Box>
        
      </Card>
    </Container>
    

    
  )
}

export default SellerOfferCard