import React from 'react'
import { styled, Container } from '@mui/material'
import SOheader from './SOheader'
import SOcard from './SOcard'

const SellerOffer = () => {
  return (
    <Container sx={{ marginTop: '12rem', marginBottom: "12rem" }} >
        <SOheader />
        <SOcard />
    </Container>
  )
}

export default SellerOffer