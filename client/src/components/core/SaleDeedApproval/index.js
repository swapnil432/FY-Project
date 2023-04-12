import React from 'react'
import { styled, Container } from '@mui/material'
import SDAheader from './SDAheader'
import SDAdetails from './SDAdetails'
import PropertyImage from './PropertyImage'

const InfoContainer = styled('div')({
    display: "flex",
    flexDirection: 'column',
    marginRight: '7rem'
})

const SaleDeedApproval = () => {
  return (
    <Container sx={{ marginTop: '12rem', marginBottom: "12rem", display: 'flex'}} >
        <InfoContainer>
            <SDAheader />
            <SDAdetails />
        </InfoContainer>
        <PropertyImage />
    </Container>
  )
}

export default SaleDeedApproval