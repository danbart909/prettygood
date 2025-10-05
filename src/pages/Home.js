import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Box, Button,  } from '@mui/material'
import { Row, Col } from '../components/helper'
import tiedye from '../images/tiedye.jpg'
import happywife from '../images/happywife.jpg'
import happywife2 from '../images/happywife2.jpg'
import roundbox from '../images/roundbox.jpg'
import taxes from '../images/taxes.webp'
import ring from '../images/ring.webp'
import wrkr from '../images/wrkr.png'
import { motion } from 'framer-motion'

export default function Home() {
  const [ expand1, setExpand1 ] = useState(false)
  const [ expand2, setExpand2 ] = useState(false)
  const [ expand3, setExpand3 ] = useState(false)

  return (
    <Col
      // p='1vw'
      // gap='1vw'
    >
      <Box
        display='flex'
        flexDirection='column'
        m='1vw 1vw 3vw'
        p='1vw 2vw'
        height='25vh'
        justifyContent='center'
        alignItems='center'
        // border='1px solid white'
        borderRadius='10px'
        style={{
          backgroundImage: `url(${tiedye})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Tex
          display='flex'
          flexDirection='column'
          gap='2vh'
        >
          <Box
            alignSelf='center'
            fontSize='calc(34px + 10 * ((100vw - 335px) / 1265))'
          >Pretty Good, Inc.</Box>
          <Box
            alignSelf='center'
            fontSize='calc(18px + 10 * ((100vw - 335px) / 1265))'
          >Not Bad At All since 2016</Box>
        </Tex>
      </Box>

      <hr
        width='80%'
      />

      <Col
        flexDirection='column'
        m='2vw 1vw'
        p='1vw'
        height='40vh'
        justifyContent='center'
        alignItems='center'
        // border='1px solid white'
        borderRadius='10px'
        style={{
          backgroundImage: `url(${roundbox})`,
          // backgroundSize: 'contain',
          // backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundPosition: '50% 20%',
          transition: { duration: .5 }
        }}
      >

        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to='https://www.etsy.com/shop/WoodArtisan909'
        >
          <Col
            component={motion.div}
            key={expand1}
            initial={{
              backgroundColor: expand1 ? 'rgba(0,0,0,.6)' : 'rgba(0,0,0,.9)',
              border: expand1 ? '1px solid black' : '1px solid white'
            }}
            animate={{
              backgroundColor: expand1 ? 'rgba(0,0,0,.9)' : 'rgba(0,0,0,.6)',
              border: expand1 ? '1px solid white' : '1px solid black'
            }}
            transition={{ duration: .5 }}
            backgroundColor='rgba(0,0,0,.7)'
            p='2vw'
            borderRadius='10px'
            justifyContent='space-evenly'
            onMouseEnter={() => setExpand1(true)}
            onMouseLeave={() => setExpand1(false)}
          >
            <Row
              // component={motion.div}
              // key={expand1}
              // initial={{ color: expand1 ? 'white' : 'black' }}
              // animate={{ color: expand1 ? 'black' : 'white' }}
              // transition={{ duration: .5 }}
              justifyContent='center'
            >Roundbox</Row>
            {/* <Row
              component={motion.div}
              key={expand1}
              initial={{
                display: expand1 ? 'none' : 'flex',
                width: expand1 ? 'auto' : '40vw'
              }}
              animate={{
                display: expand1 ? 'flex' : 'none',
                width: expand1 ? '40vw' : 'auto'
              }}
              transition={{ duration: .5 }}
              justifyContent='space-between'
            >
              <Row>Roundbox is a box of rounds.</Row>
              <Row>VISIT SITE</Row>
            </Row> */}
          </Col>
        </Link>

      </Col>

      <Row
        justifyContent='space-evenly'
      >

        <Box
          display='flex'
          p='1vw'
          height='21vw'
          width='46%'
          justifyContent='center'
          alignItems='center'
          // border='1px solid white'
          borderRadius='10px'
          style={{
            backgroundImage: `url(${happywife2})`,
            backgroundPosition: '60% 45%',
            backgroundSize: '150%',
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to='http://www.happywifejunk.com'
          >
            <Col
              component={motion.div}
              key={expand2}
              initial={{
                backgroundColor: expand2 ? 'rgba(0,0,0,.6)' : 'rgba(0,0,0,.9)',
                border: expand2 ? '1px solid black' : '1px solid white'
              }}
              animate={{
                backgroundColor: expand2 ? 'rgba(0,0,0,.9)' : 'rgba(0,0,0,.6)',
                border: expand2 ? '1px solid white' : '1px solid black'
              }}
              transition={{ duration: .5 }}
              backgroundColor='rgba(0,0,0,.7)'
              p='2vw'
              borderRadius='10px'
              justifyContent='space-evenly'
              onMouseEnter={() => setExpand2(true)}
              onMouseLeave={() => setExpand2(false)}
            >
              <Row
                justifyContent='center'
              >Happy Wife Junk Service</Row>
            </Col>
          </Link>
        </Box>
  
        <Box
          display='flex'
          p='1vw'
          height='21vw'
          width='46%'
          justifyContent='center'
          alignItems='center'
          // border='1px solid white'
          borderRadius='10px'
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
            <Col
              component={motion.div}
              key={expand3}
              initial={{
                backgroundColor: expand3 ? 'rgba(0,0,0,.6)' : 'rgba(0,0,0,.9)',
                border: expand3 ? '1px solid black' : '1px solid white'
              }}
              animate={{
                backgroundColor: expand3 ? 'rgba(0,0,0,.9)' : 'rgba(0,0,0,.6)',
                border: expand3 ? '1px solid white' : '1px solid black'
              }}
              transition={{ duration: .5 }}
              backgroundColor='rgba(0,0,0,.7)'
              p='2vw'
              borderRadius='10px'
              justifyContent='space-evenly'
              onMouseEnter={() => setExpand3(true)}
              onMouseLeave={() => setExpand3(false)}
            >
              <Row
                justifyContent='center'
              >wrkr</Row>
            </Col>
          </Link>
        </Box>
      </Row>

      <Row
        m='1vw 0 0 0'
        justifyContent='center'
      >
        <Row>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to='/privacypolicy'
          >wrkr Privacy Policy</Link>
        </Row>
        <Row
          m='0 2vw'
        >-</Row>
        <Row>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to='/deleteaccount'
          >
            Delete wrkr Account
          </Link>
        </Row>
      </Row>

    </Col>
  )
}

const Tex = (props) => {
  return <Box {...props}
    p='2vw'
    backgroundColor='rgba(0,0,0,.7)'
    borderRadius='10px'
    style={{
      transition: '.5s',
      duration: '.5s'
    }}
  ></Box>
}