import React from 'react'
import { styled, Button, Box } from '@mui/material'

const Info = styled('div')({
    marginTop: '5rem'
})

const SubInfo = styled('div')({
    marginTop: '2rem'
})

const Details = () => {
  return (
    <Box>
        <Info>
            <SubInfo>
            <b>Agreed Price:</b> 50 ETH
            </SubInfo>

            <SubInfo>
            <b>Seller ID:</b> xxxxxxxxxxxxxxxxxxx
            </SubInfo>

            <SubInfo>
            <b>Buyer ID:</b> xxxxxxxxxxxxxxxxxxxx
            </SubInfo>

            <SubInfo sx={{ marginBottom: "2rem"}}>
            <b>Property ID:</b> xxxxxxx
            </SubInfo>
        </Info>

        <Button variant="contained" color="success" sx={{ paddingLeft: '2rem', paddingRight: '2rem', marginBottom: '1rem', marginTop: "2.5rem", marginRight: "2rem" }}>
            Approve
        </Button>
        <Button variant="contained" color="error" sx={{ paddingLeft: '2rem', paddingRight: '2rem', marginBottom: '1rem', marginTop: "2.5rem" }}>
            Reject
        </Button>
    </Box>
  )
}

export default Details