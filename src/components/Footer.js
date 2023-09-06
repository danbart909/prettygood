import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { Row, Col } from '../components/helper'

export default function Footer() {

  return (
    <Row
      m='2vw 1vw 0'
      w='100vw'
      // border='1px solid white'
    >
      <Row
        p='2vw 1vw'
        width='100%'
        justifyContent='center'
        border='1px solid white'
      >Footer</Row>
    </Row>
  )
}