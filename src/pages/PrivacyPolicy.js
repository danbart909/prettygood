import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { Row, Col } from '../components/helper'

export default function PrivacyPolicy() {

  return (
    <Col
      backgroundColor='black'
      // height='97vh'
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
      >WRKR (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data.{"\n"}

      By using the WRKR app, you agree to the practices described in this Privacy Policy.</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >1. Information We Collect

      WRKR collects the following personal information when you create an account or use the app:

      Name

      Email address

      Phone number

      Address

      No other personal data is collected.</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >2. How Your Information Is Used

      We use your information solely for:

      Creating and managing your WRKR account

      Displaying job postings and worker contact details as required

      Allowing communication between job posters and workers

      Providing customer support

      Maintaining the functionality and security of the service

      WRKR does not use your data for advertising, tracking, or analytics outside of core app functionality.</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >3. How Your Information Is Stored

      Your information is stored securely in our private database.
      We take reasonable technical and administrative steps to protect your data from unauthorized access, loss, or misuse.</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >4. Information Sharing

      WRKR does not sell, rent, or share your personal information with third parties.

      The only time your information is shared is:

      With other WRKR users only when necessary for job posting or hiring (for example, contact details for communication)

      If required by law or legal request (rare situations like court orders)

      We never share your data for marketing or advertising.</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >5. Children’s Privacy

      WRKR is not intended for individuals under the age of 18. We do not knowingly collect data from minors.</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >6. Your Rights and Choices

      You may request to:

      Access the information we have about you

      Update or correct your information

      Delete your account and associated data

      To do so, contact us at the email address below.</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >7. Data Retention

      We retain your personal information only as long as your WRKR account is active or as required to provide the service.

      When you delete your account, your personal data is removed from our database unless retention is required by law.</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      >9. Contact Us

      If you have questions or concerns about this Privacy Policy or your data, or you want your data deleted or modified, you can contact us at:

      Email: danbart909@gmail.com</Row>
      <Row
        m='1vw'
        p='1vw'
        justifyContent='center'
        border='1px solid white'
      ></Row>
    </Col>
  )
}