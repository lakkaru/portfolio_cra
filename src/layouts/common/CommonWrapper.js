import React from 'react'
import Header from './header/Header'
import { Box } from '@mui/material'
import Footer from './footer/Footer'

export default function CommonWrapper({children}) {
  return (
    <>
    <Header/>
    <Box>{children}</Box>
    <Footer />
    </>
    

  )
}
