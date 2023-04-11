import React from 'react'
import { styled } from '@mui/material'
import { Height } from '@mui/icons-material'

const PropImg = styled('div')({
    width: '36rem',
    height: '26rem',
    marginTop: "1.5rem",
    marginBottom: "5rem"
})

const PropertyImg = () => {
  return (
    <PropImg>
        <img alt='property' src='/rectangle-106@2x.jpeg' style={{ width: '100%', height: '100%'}} />
    </PropImg>
  )
}

export default PropertyImg