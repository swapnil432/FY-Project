import React from 'react'
import { styled, Container } from '@mui/material'
import SDheader from './SDheader'
import SaleDeedForm from './saleDeedForm'


const SaleDeed = () => {
  return (
    <Container sx={{ marginTop: '8rem'}}>
        <SDheader />
        <SaleDeedForm />
    </Container>
  )
}

export default SaleDeed