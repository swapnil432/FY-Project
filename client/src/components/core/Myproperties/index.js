import * as React from 'react';
import {styled, Button, TextField,CardMedia, CardContent,CardActions, Card, Container,  InputAdornment} from '@mui/material';
const Flex2 = styled("div")({
  display: "flex",
  justifyContent:"space-between",
  marginTop:"0.5 rem"

});
const Myproperties = () => {
  return (
    <div style={{display:"flex",marginTop: "7rem",width: "100%", height:"70vh" }}>
        <Card sx={{marginLeft:"5rem",  width: 340, height: 430}}>
        <CardMedia
            component="img"
            height="200"
            image="https://picsum.photos/200/300"
            sx={{padding:"1rem" }}
        />
        <CardContent sx={{marginTop:-2}}>
            <Flex2>
              <h5>Propery1</h5>
              <h5>10ETH</h5>
            </Flex2>
            <div className="p-h6" style={{ margin: "1rem 0" }}>ID: 0x323904203473203283232</div>
            <Flex2>
            <TextField
              hiddenLabel
              variant="filled"
              size="small"
              sx={{ marginTop: 0.5, width: "60%" }}
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
              }}
            />
            <Button variant='contained'sx={{height:"2rem",marginTop:1}}>Save</Button>
            </Flex2>
        </CardContent>
        <CardActions>
            <Button variant='outlined'sx={{width:"100%",m:1,height:"2rem", fontWeight: "bold"}} >List for  Sale / Unlist</Button>
        </CardActions>
        </Card>
        
        


        
    </div>
  );
}

export default Myproperties