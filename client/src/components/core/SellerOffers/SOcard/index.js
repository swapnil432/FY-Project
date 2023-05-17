import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, Container } from '@mui/material';
import { approveSale } from '@/SmartContractFunctions';

const SellerOfferCard = () => {
  const [offerDetail, setofferDetail] = useState([])
  let seller = window.localStorage.getItem("user");
  seller = JSON.parse(seller)
  //get seller from local storage

  const getselleroffer= () => {
    axios({
      method: "GET",
      url: `/api/getselloffer/${seller.public_key}`,
    })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        setofferDetail(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };
  

  const createNotification = () =>{
    axios({
      method: "POST",
      url: `/api/notification`,
      data: {
        property_id: offerDetail.property_id,
        buyer_id: offerDetail.buyer_id,
      },
    })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  }

  const approveBuyer = async (buyer, propertyId)=>{
    let response = await approveSale(propertyId,buyer, seller)
    createNotification();
  }
  
  return (
    <Container sx={{ marginTop: '3rem' }}>
      <Card sx={{ display: 'flex', height: '16rem', width: '70%', borderRadius:"8px"}}>
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