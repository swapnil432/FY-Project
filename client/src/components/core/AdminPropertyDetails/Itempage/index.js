import React from 'react'
import { Paper, Button } from '@mui/material'
import { styled, Box } from '@mui/material'
import Grid from "@mui/material/Grid";


const Item = (item) => {
  return (
    <div>
        <Paper>
            <img src={item.image} alt={item.title} style={{width:"100%", height:"25rem"}}/>
            <h2>{item.title}</h2>
            
        </Paper>
    </div>
  )
}

export default Item
