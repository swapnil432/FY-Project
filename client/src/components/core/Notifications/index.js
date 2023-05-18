import { styled, Button, Card, CardContent, CardMedia, Container } from '@mui/material'
import React from 'react'
const Flex2 = styled("div")({
  display: "flex",
  justifyContent:"flex-end",
  marginTop:"-4rem"
});

const Notifications = () => {
  return (
    <div style={{ marginTop: "7rem",width: "100%", height:"60vh" }}>
        <Container sx={{ marginTop: "2rem", width: "100% "}}>
          <Card sx={{ display: "flex", height: "7rem", width: "100%" }}>
              <CardMedia
                  component="img"
                  sx={{ width: "10rem", marginRight: "1rem", padding:"0.5rem" }}
                  image='https://picsum.photos/200/300'
                  alt="property"
              />
              <CardContent sx={{ display:"flex", flex: "1 0 auto",flexDirection:"column"}}>
                  <h5>Propery1</h5>
                  <div className="p-h6" style={{ margin: "1rem 0" }}>0x323904203473203283232</div>
                  <Flex2>
                  <div className="p-h5" style={{margin:"1.5rem"}}>10ETH</div>
                    <Button sx={{margin:"1rem", color:"red"}}>Reject</Button>
                    <Button variant="contained"  sx={{margin:"1rem"}}>Make Payment</Button>
                  </Flex2>
              </CardContent>
          </Card>
        </Container>
    </div>
  )
}

export default Notifications