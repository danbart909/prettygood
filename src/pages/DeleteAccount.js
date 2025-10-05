import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { Row, Col } from '../components/helper'

export default function DeleteAccount() {

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
      >
        Delete Account
      </Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >
        Here you can put in a request to have your account deleted from the wrkr app.
      </Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >
        Form goes here
      </Row>
    </Col>
  )
}