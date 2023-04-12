import React from 'react'
import { styled, Box } from '@mui/material'
import Grid from "@mui/material/Grid";


const MainImg = styled('div')({
    width: '100%',
    height: '25rem',
    marginBottom: '1rem'
})

const GridImg = styled('div')({
    width: '100%',
    height: '10rem'
})

const ImageGallery = () => {
  return (
    <Box sx={{ marginBottom: '2rem' }}>
        <MainImg>
            <img src='/Rectangle116.png' alt='property' style={{ height: '100%', width: '100%'}}/>
        </MainImg>  
        <GridImg>

        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Grid item>
                    <img
                        src="/Rectangle110.png"
                        alt="property"
                        style={{ height: "11rem", width: "100%" }}
                    />
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid>
                    <img
                        src="/Rectangle111.png"
                        alt="property"
                        style={{ height: "11rem", width: "100%" }}
                    />
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid>
                    <img
                        src="/Rectangle112.png"
                        alt="property"
                        style={{ height: "11rem", width: "100%" }}
                    />
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid>
                    <img
                        src="/Rectangle113.png"
                        alt="property"
                        style={{ height: "11rem", width: "100%" }}
                    />
                </Grid>
            </Grid>
                    
            
      </Grid>
            
                {/* <Grid item xs={6}>
                    <img
                    src="/Rectangle110.png"
                    alt="property"
                    style={{ height: "11rem", width: "100%" }}
                    />
                </Grid> */}
        </GridImg>
    </Box>
  )
}

export default ImageGallery