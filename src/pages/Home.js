import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Box, Button } from '@mui/material'
import { Row, Col } from '../components/helper'
import tiedye from '../images/tiedye.jpg'
import happywife from '../images/happywife.jpg'
import roundbox from '../images/roundbox.jpg'
import taxes from '../images/taxes.webp'
import ring from '../images/ring.webp'
import wrkr from '../images/wrkr.png'

export default function Home() {
  const [ per, setPer ] = useState(100)

  return (
    <Col
      // p='1vw'
      // gap='1vw'
    >
      <Box
        display='flex'
        m='1vw 1vw 3vw'
        p='1vw 2vw'
        height='25vh'
        justifyContent='center'
        alignItems='center'
        // fontSize='calc(24px + 6 * ((100vw - 335px) / 1265))'
        border='1px solid white'
        style={{
          backgroundImage: `url(${tiedye})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ><Tex>Pretty Good, Inc.</Tex></Box> 
      <Con
        style={{
          backgroundImage: `url(${happywife})`,
          backgroundPosition: 'center',
        }}
      >
        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to='http://www.happywifejunk.com'
        >
          <Tex>Happy Wife Junk Service</Tex>
        </Link>
      </Con>
      <Con
        style={{
          backgroundImage: `url(${wrkr})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to='https://play.google.com/store/apps/details?id=com.wrkr'
        >
          <Tex>wrkr</Tex>
        </Link>
      </Con>
      <Con
        style={{
          backgroundImage: `url(${roundbox})`,
          backgroundPosition: 'center',
        }}
      >
        <Tex>Coming Soon - Roundbox</Tex>
      </Con>
      <Con
        style={{
          backgroundImage: `url(${taxes})`,
          backgroundPosition: 'center',
        }}
      >
        <Tex>Coming Soon - Pretty Good Tax Service</Tex>
      </Con>
      <Con
        style={{
          backgroundImage: `url(${ring})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          // backgroundAttachment: 'fixed'
        }}
      >
        <Tex>Coming Soon - The Amazing Utility Ring of Wonder and not Evil</Tex></Con>
    </Col>
  )
}

const Con = (props) => {
  return <Box {...props}
    display='flex'
    m='1vw'
    p='1vw'
    height='40vh'
    justifyContent='center'
    alignItems='center'
    border='1px solid white'
  />
}

const Tex = (props) => {
  return <Box {...props}
    p='2vw'
    backgroundColor='rgba(0,0,0,.7)'
    borderRadius='10px'
  ></Box>
}