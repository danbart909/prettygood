import React, { Box } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sticky } from 'semantic-ui-react'
import { Row, Col } from './components/helper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Info from './pages/Info'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DeleteAccount from './pages/DeleteAccount'

export default function App() {
  return (
    <Col
      // width='100vw'
      // height='100vh'
      p='0 0 1vw 0'
      backgroundColor='black'
    >
      {/* <TopNav />
      <Sticky>
        <BottomNav />
      </Sticky> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/deleteaccount' element={<DeleteAccount />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/faq' element={<FAQ />} /> */}
        {/* <Route path='/info' element={<Info />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Col>
  );
}