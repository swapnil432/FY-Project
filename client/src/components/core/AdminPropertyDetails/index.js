import React from 'react'
import APDheader from './APDheader'
import ImageGallery from './ImageGallery'
import Details from './Details'
import { styled, Container, Button, Box } from '@mui/material'
import Carouselpage from './Carouselpage'

const Flex1 = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
})

const AdminPropertyDetails = () => {
  return (
    <Container sx={{ marginTop: '2rem', marginBottom: '10rem' }}>
        <Flex1>
            <APDheader />
            <Box>
                <Button variant="contained" color="success" sx={{ paddingLeft: '2rem', paddingRight: '2rem', marginTop: "2.5rem", marginRight: "2rem" }}>
                    Approve
                </Button>
                <Button variant="contained" color="error" sx={{ paddingLeft: '2rem', paddingRight: '2rem', marginTop: "2.5rem" }}>
                    Reject
                </Button>
            </Box>
            
        </Flex1>
        {/* <ImageGallery /> */}
        <Carouselpage/>
        <Details />
    </Container>
  )
}

export default AdminPropertyDetails