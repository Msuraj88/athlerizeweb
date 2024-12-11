import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import { Card } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
        <Header />
        <div className='contact-container'>
          <div className='header-main-white text-center'>
            <h1>let’s <span style={{ color: "#0089D1" }}>talk</span></h1>
            <p>We're here to help and support you</p>
          </div>
          <div className='cards-section d-flex flex-wrap gap-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>early access</Card.Title>
              <Card.Text>
                By joining our waitlist, you’ll be among the first to hear about exciting new courses, early-bird discounts, and exclusive booking opportunities for our limited slots.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a target='blank' href='https://forms.gle/VLyUcE5Phdg6kMSD8'>
              Join the Waitlist <span style={{ float: 'right' }}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24902 10.4988L6.08197 5.66589L1.24902 0.832947"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              </a>
            </Card.Footer>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>join our squad</Card.Title>
              <Card.Text>
              By joining our waitlist, you’ll be among the first to hear about exciting new courses, early-bird discounts, and exclusive booking opportunities for our limited slots.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a target='blank' href='https://forms.gle/sSCQe1434a2EBRXQ8'>
            Apply Now <span style={{ float: 'right' }}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24902 10.4988L6.08197 5.66589L1.24902 0.832947"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              </a>
            </Card.Footer>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>request support</Card.Title>
              <Card.Text>
              By joining our waitlist, you’ll be among the first to hear about exciting new courses, early-bird discounts, and exclusive booking opportunities for our limited slots.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a target='blank' href='https://forms.gle/PsjSWGqWA3ZePaom8'>
            Write to Us <span style={{ float: 'right' }}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24902 10.4988L6.08197 5.66589L1.24902 0.832947"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              </a>
            </Card.Footer>
          </Card>
          </div>
          <div className='align-items-center bg-body contact-details d-flex flex-wrap justify-content-around mx-3 my-5 p-5 rounded-3'>
            <div>
              <h5>our <span style={{ color: "#0089D1" }}>headquarters:</span></h5>
              <p>
              athlerize, <br />
              whatsinthegame sports & media pvt ltd<br />
              106, sri jaya empire, nizampet, hyderabad,<br />
              telangana, India
              </p>
            </div>
            <span className='vr-line' />
            <div>
              <p>our <span style={{ color: "#0089D1" }}>email id:</span> hello@athlerize.com</p>
              <p>our <span style={{ color: "#0089D1" }}>whatsapp:</span> +91 9666 44 29 51</p>
            </div>
          </div>
          <div className='partners-section'>
      <div className='header'>
        <div>
          <h1>Our <span>partners</span></h1>
          <p>Find courses that fit your passion, whether active or coming soon!</p>
        </div>
        </div>
        <div className='partner-imgs'>
          <div>
            <img src='/assets/images/oa.png' alt='' />
          </div>
          <div>
            <img src='/assets/images/hh.png' alt='' />
          </div>
          <div>
            <img src='/assets/images/hbh.png' alt='' />
          </div>
          <div>
            <img src='/assets/images/blitz.png' alt='' />
          </div>
          <div>
            <img src='/assets/images/bf.png' alt='' />
          </div>
          <div>
            <img src='/assets/images/inde.png' alt='' />
          </div>
        </div>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact