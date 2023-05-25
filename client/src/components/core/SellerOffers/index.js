import React from 'react'
import { styled, Container } from '@mui/material'
import SellerOfferCard from './SOcard'
import SellerOfferHeader from './SOheader'

const SellerOffer = () => {
  return (
    <Container sx={{ marginTop: '8rem', marginBottom: "12rem" }} >
        <SellerOfferHeader />
        <SellerOfferCard />
    </Container>
  )
}

export default SellerOffer