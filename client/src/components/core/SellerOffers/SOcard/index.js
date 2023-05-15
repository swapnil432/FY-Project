import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled, Button, Container } from '@mui/material';
import { approveSale } from '@/SmartContractFunctions';

const SellerOfferCard = () => {
  const [offerDetail, setofferDetail] = useState([])
  //get seller from local storage
  let seller;

  const approveBuyer = async (buyer, propertyId)=>{
    let response = await approveSale(propertyId,buyer, seller)
  }
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
            <Typography component="div" variant="h5" sx={{ marginBottom: '0.7rem'}}>
               Property ID: <b>66848awddssd45</b>
            </Typography>
            <Typography variant="h5" component="div" sx={{ marginBottom: '0.7rem'}}>
              Buyer ID: <b>x86ttuuyhdwl</b>
            </Typography>
            <Typography variant="h5" component="div">
              Current Price: <b>12 ETH</b>
            </Typography>
            <Button onClick={(e)=>approveBuyer(/*propid, buyer, seller*/)} variant="contained" sx={{ paddingLeft: '3rem', paddingRight: '3rem', height: '3rem', marginTop: '2rem'}}>
              Approve Buyer
          </Button>
          </CardContent>
        </Box>
        
      </Card>


    </Container>
    

    
  )
}

export default SellerOfferCard