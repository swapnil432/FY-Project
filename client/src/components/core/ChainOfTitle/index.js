import { styled, Button, Card, CardContent, CardMedia, Container } from '@mui/material'
import React from 'react'
const Flex2 = styled("div")({
  display: "flex",
  justifyContent:"flex-end",
  marginTop:"-4rem"
});

const ChainofTitle = () => {
  return (
    <div style={{ marginTop: "7rem",width: "100%", height:"60vh" }}>
        <Container sx={{ marginTop: "2rem", width: "100% "}}>
          <Card sx={{ display: "flex", height: "7rem", width: "100%" }}>
              <CardContent sx={{ display:"flex", flex: "1 0 auto",flexDirection:"column"}}>
                  <div className="p" style={{ margin: "1rem 0" }}>Current Owner</div>
                  <h5>Riya Naik</h5>
                  <div className="p-h5" style={{margin:"1.5rem"}}>10ETH</div>
                    <Button sx={{margin:"1rem", color:"red"}}>Reject</Button>
                    <Button variant="contained"  sx={{margin:"1rem"}}>Make Payment</Button>
              </CardContent>
          </Card>
        </Container>
    </div>
  )
}

export default ChainofTitle