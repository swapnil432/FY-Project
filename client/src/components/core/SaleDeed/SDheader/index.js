import React from 'react'
import { styled } from '@mui/material';

const Header = styled("div")({
    fontSize: '3rem',
    // padding: '0.3rem',
});

const User = styled("div")({
    marginBottom: '1rem'
})

const SaleDeedHeader = () => {
  return (
    <>
        <User>HELLO JOHN DOE</User>
        <Header>Sale Deed Creation</Header>
    </>
  )
}

export default SaleDeedHeader