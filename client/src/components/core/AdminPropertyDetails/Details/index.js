import React from 'react'
import { styled, Box, Button } from '@mui/material'

const Info = styled('div')({
    marginTop: '5rem'
})

const SubInfo = styled('div')({
    marginTop: '1.5rem'
})

const Details = () => {
  return (
    <Box>
        <Info>
            <SubInfo>
            <b>Type:</b> Apartment
            </SubInfo>

            <SubInfo>
            <b>Price:</b> 60 ETH
            </SubInfo>

            <SubInfo>
            <b>Seller ID:</b> xxxxxxxxxxxxxxxxxxxx
            </SubInfo>

            <SubInfo>
            <b>Full Name:</b> abc xyz
            </SubInfo>

            <SubInfo>
            <b>Bathroom:</b> 2
            </SubInfo>

            <SubInfo>
            <b>Bedroom:</b> 4
            </SubInfo>

            <SubInfo>
            <b>kitchen:</b> 1
            </SubInfo>

            <SubInfo>
            <b>Area:</b> 224 sq m
            </SubInfo>

            <SubInfo>
            <b>Pincode:</b> 403703
            </SubInfo>

            <SubInfo sx={{ marginBottom: "2rem"}}>
            <b>Address:</b> Ponda
            </SubInfo>
        </Info>

        <Button variant="contained" sx={{ paddingLeft: '2rem', paddingRight: '2rem', marginTop: "2.5rem"}}>
            Download Document
        </Button>
    </Box>
  )
}

export default Details