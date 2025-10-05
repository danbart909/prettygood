import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { Row, Col } from '../components/helper'

export default function PrivacyPolicy() {

  return (
    <Col
      backgroundColor='black'
      height='97vh'
    >
      <Row
        m='1vw'
        p='2vw 1vw'
        justifyContent='center'
        border='1px solid white'
      >Privacy Policy</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >We collect your email address and location, but they are not shared with anyone.</Row>
    </Col>
  )
}