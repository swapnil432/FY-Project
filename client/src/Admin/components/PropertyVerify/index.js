import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled, Button, Container } from '@mui/material';
import Title from '../Title';
import Link from 'next/link';
import PropDetailsPage from '../PropDetailsPage';
import React, { useState, useEffect } from 'react';
const PropertyVerify = ({showProperty,setShowProperty}) => {
  return (
    <div style={{ width: '100%' }}>
    <Title>Property Verification</Title>
    <Container sx={{ marginTop: '2rem', width:'100% '}}>
      <Card sx={{ display: 'flex', height: '12rem', width: '100%'}}>
        <CardMedia
          component="img"
          sx={{ width: "20rem", marginRight: "3rem" }}
          image="/rectangle114.png"
          alt="property"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography   variant="h5" sx={{ marginTop: '-1rem' ,marginBottom: '0.5rem'}}>
              Apartment ABC
            </Typography>
            <Typography variant="h6" >
              Headland Sada, Vasco, Murmugao, Goa.
            </Typography>
            <Typography marginTop="0.5rem" variant="h5" fontWeight="bold" >
              51 ETH
            </Typography>
            <Button onClick={()=>{setShowProperty(true)}} variant="contained" sx={{ paddingLeft: '3rem', paddingRight: '3rem', height: '2.5rem', marginTop: '0.5rem'}}>
              View Offer
          </Button>
          </CardContent>
        </Box>
      </Card>


      <Card sx={{ display: 'flex', height: '12rem', width: '100%',marginTop: '1rem'}}>
        <CardMedia
          component="img"
          sx={{ width: "20rem", marginRight: "3rem" }}
          image="/rectangle114.png"
          alt="property"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography   variant="h5" sx={{ marginTop: '-1rem' ,marginBottom: '0.5rem'}}>
              Apartment ABC
            </Typography>
            <Typography variant="h6" >
              Headland Sada, Vasco, Murmugao, Goa.
            </Typography>
            <Typography marginTop="0.5rem" variant="h5" fontWeight="bold" >
              51 ETH
            </Typography>
            <Button onClick={()=>{setShowProperty(true)}} variant="contained" sx={{ paddingLeft: '3rem', paddingRight: '3rem', height: '2.5rem', marginTop: '0.5rem'}}>
              View Offer
          </Button>
          </CardContent>
        </Box>
      </Card>


      <Card sx={{ display: 'flex', height: '12rem', width: '100%',marginTop: '1rem'}}>
        <CardMedia
          component="img"
          sx={{ width: "20rem", marginRight: "3rem" }}
          image="/rectangle114.png"
          alt="property"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography   variant="h5" sx={{ marginTop: '-1rem' ,marginBottom: '0.5rem'}}>
              Apartment ABC
            </Typography>
            <Typography variant="h6" >
              Headland Sada, Vasco, Murmugao, Goa.
            </Typography>
            <Typography marginTop="0.5rem" variant="h5" fontWeight="bold" >
              51 ETH
            </Typography>
            <Button onClick={()=>{setShowProperty(true)}} variant="contained" sx={{ paddingLeft: '3rem', paddingRight: '3rem', height: '2.5rem', marginTop: '0.5rem'}}>
              View Offer
            </Button>
          </CardContent>
        </Box>
      </Card>
      
    </Container>
    

    </div>
  )
}

export default PropertyVerify