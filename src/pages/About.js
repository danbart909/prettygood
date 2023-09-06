import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { Row, Col } from '../components/helper'

export default function About() {

  return (
    <Col>
      <Row
        m='1vw'
        p='2vw 1vw'
        border='1px solid white'
      >This is the: About Page</Row>
      <Row
        m='1vw'
        p='1vw'
        border='1px solid white'
      >Page Content</Row>
    </Col>
  )
}