"use client"
import { Button } from 'primereact/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CourseCard from './components/courseCard'
import Header from './components/Header'
import { useRouter } from 'next/navigation'
import Footer from './components/Footer'
export default function Home() {
  const router = useRouter()
  const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDnlZ5kZe7dgk9RCzy1-csgiZ3GBIRDnBHxYx83zynjhv9Fg/viewform?embedded=true'
  return (
    <>
      <Header />
    <div className='main-home-container'>
      <div className='home-container'>
      <h1>
        where <span>sports</span> meets learning.
      </h1>
      <p>Learn from the best and take your next step with confidence.</p>
      <Button label="View Courses" 
      onClick={() => router.push('/courses')} 
      rounded className='joinlist-btn' />
    </div>
    <div className='message-section'>
      <div className='text-cont'>
        <h3>A Message from the <br />Mastermind</h3>
        <p>As a professional athlete, I know the value of learning from the best. athleriZe offers tailored programs for athletes, students, working professionals of any age, level and everyone in between. Join our community of learners and take your passion to the next level.</p>
        <h5>Sai Praneeth B</h5>
        <p className='small'><small>Founding Partner, athleriZe</small></p>
        <p className='small'><small>Arjuna Awardee, Olympian, Former World No. 10 Badminton Player.</small></p>
      </div>
      <div className='img-cont'>
        <img src='/assets/images/sai-msg.png' />
      </div>
    </div>
    <div className='courses-section'>
      <div className='header'>
        <div>
          <h1>Our <span>Courses</span></h1>
          <p>Find courses that fit your passion, whether active or coming soon!</p>
        </div>
        <div>
        <Button label="View All" 
      onClick={() => router.push('/courses')}  severity="info" outlined rounded />
        </div>
      </div>
      <div className='card-section'>
      <Container style={{width: '70%'}}>
      <Row>
        <Col><CourseCard isLaunchSoon={false} /></Col>
        <Col><CourseCard isLaunchSoon={true} /></Col>
        <Col><CourseCard isLaunchSoon={true} /></Col>
      </Row>
      </Container>
      </div>

      <Container className="py-5">
          <Row>
            <Col xs={3} md={3} lg={3}>
              <div>
                <h1>who can <span style={{ color: "#0089D1" }}>use?</span></h1>
                <p>Find courses that fit your passion, whether active or coming soon! Find courses that fit your passion.</p>
                <Button label="View Courses" 
                  onClick={() => router.push('/courses')} 
                  rounded className='joinlist-btn-blue' />
              </div>
            </Col>
            <Col xs={1} md={1} lg={1}></Col>
            <Col xs={2} md={2} lg={2} className="abt-cards">
            <Card>
              <Card.Body>
                <Card.Title className="title">
                  for school students
                </Card.Title>
                <Card.Text className="desc">
                By joining our waitlist, you’ll be among the first to hear about exciting new courses, early-bird discounts, and exclusive booking opportunities for our limited slots.
                </Card.Text>
                <Card.Link href="#" className="link">get started  
                <span style={{ marginLeft: '50px' }}>
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
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
                </Card.Link>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={2} md={2} lg={2} className="abt-cards">
            <Card>
              <Card.Body>
                <Card.Title className="title">
                  for college students
                </Card.Title>
                <Card.Text className="desc">
                By joining our waitlist, you’ll be among the first to hear about exciting new courses, early-bird discounts, and exclusive booking opportunities for our limited slots.
                </Card.Text>
                <Card.Link href="#" className="link">get started  
                <span style={{ marginLeft: '50px' }}>
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
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
                </Card.Link>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={2} md={2} lg={2} className="abt-cards">
            <Card>
              <Card.Body>
                <Card.Title className="title">
                sports enthusiasts
                </Card.Title>
                <Card.Text className="desc">
                By joining our waitlist, you’ll be among the first to hear about exciting new courses, early-bird discounts, and exclusive booking opportunities for our limited slots.
                </Card.Text>
                <Card.Link href="#" className="link">get started  
                <span style={{ marginLeft: '50px' }}>
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
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
                </Card.Link>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={2} md={2} lg={2} className="abt-cards">
            <Card>
              <Card.Body>
                <Card.Title className="title">
                for athletes
                </Card.Title>
                <Card.Text className="desc">
                By joining our waitlist, you’ll be among the first to hear about exciting new courses, early-bird discounts, and exclusive booking opportunities for our limited slots.
                </Card.Text>
                <Card.Link href="#" className="link">get started  
                <span style={{ marginLeft: '50px' }}>
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
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
                </Card.Link>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      <div className='career-section'>
      <Row className='h-100'>
        <Col>
          <p>the athleriZe advantage</p>
          <h1>building careers beyond <br />the game</h1>
          <p>Your ambitions, passions and love towards sports <br />deserve the right platform. </p>
          <img src='/assets/images/sai-career.png' className='career-img' />
        </Col>
        <Col className='align-content-end'>
          <div className='d-flex career-options'>
          <div className='blocks'>
            <Row>
              <Col lg="3"><img src='/assets/images/career.svg' /></Col>
              <Col lg="6">
                <p>Expert Instructions</p>
              </Col>
            </Row>
          </div>
          <div className='blocks'>
          <Row>
              <Col lg="3"><img src='/assets/images/career.svg' /></Col>
              <Col lg="6">
                <p>Top Athletes</p>
              </Col>
            </Row>
          </div>
          </div>
          <div className='d-flex career-options'>
          <div className='blocks'>
            <Row>
              <Col lg="3"><img src='/assets/images/career.svg' /></Col>
              <Col lg="6">
                <p>Affordable Pricing</p>
              </Col>
            </Row>
          </div>
          <div className='blocks'>
          <Row>
              <Col lg="3"><img src='/assets/images/career.svg' /></Col>
              <Col lg="6">
                <p>Internship Programs</p>
              </Col>
            </Row>
          </div>
          </div>
          <div className='d-flex career-options'>
          <div className='blocks'>
            <Row>
              <Col lg="3"><img src='/assets/images/career.svg' /></Col>
              <Col lg="6">
                <p>Diverse Topics</p>
              </Col>
            </Row>
          </div>
          <div className='blocks'>
          <Row>
              <Col lg="3"><img src='/assets/images/career.svg' /></Col>
              <Col lg="6">
                <p>Career Focussed</p>
              </Col>
            </Row>
          </div>
          </div>
        </Col>
        </Row>
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
