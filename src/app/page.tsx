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
          <p>Learn from superstars in the sporting field & take your next steps with confidence. </p>
          <Button label="View Courses"
            onClick={() => router.push('/courses')}
            rounded className='joinlist-btn' />
        </div>
        <div className='message-section'>
          <div className='text-cont mb-16'>
            <h3>Message From Our  <br />Mastermind</h3>
            <p className='mb-24 mt-24'>As a professional athlete, I understand the power of learning and mentorship. Throughout my career, I've had the privilege of learning from some of the greatest minds in the field. I believe this sort of world-class training, expert mentorship, and a supportive community should be accessible and affordable to everyone. And thus, athleriZe was founded.</p>
            <h5>Sai Praneeth B</h5>
            <p className='small'><small className='f400'>Founding Partner, athleriZe</small></p>
            <p className='small' ><small>Arjuna Awardee, Olympian, Former World No. 10 Badminton Player.</small></p>
          </div>
          <div className='img-cont'>
            <img src='/assets/images/sai-msg.png' />
          </div>
        </div>
        <div className='courses-section'>
          <div className='header'>
            <div>
              <h1>Our <span>Courses</span></h1>
              <p>Find courses that fit your passion and goals!</p>
            </div>
            <div>
              <Button label="View All" className='course-btn'
                onClick={() => router.push('/courses')} severity="info" outlined rounded />
            </div>
          </div>
          <div className='card-section'>
            <Container className='course-card-sec' >
              <Row>
                <div className='col-md-4'><CourseCard bgImg={'t-saipraneeth'} title={"SAI PRANEETH"} desc={'From Grassroots to Glory: Building a Career in Sports'} isLaunchSoon={false} /></div>
                <div className='col-md-4'><CourseCard bgImg={'kunal2'} title={"KUNAL SAMANT"} desc={'Mastering the Art of Sports Content Creation'} isLaunchSoon={true} /></div>
                <div className='col-md-4'><CourseCard bgImg={'revanth2'} title={"REVANTH TUMMALA"} desc={'Capturing the Game: The Art of Sports Photography'} isLaunchSoon={true} /></div>
              </Row>
            </Container>
          </div>

          <Container className="py-5">
            <Row className='page-cards'>
              <Col xs={12} md={5} lg={3}>
                <div>
                  <h1>who can use <span style={{ color: "#0089D1" }}>athlerize?</span></h1>
                  <p>athleriZe, an e-learning platform designed for everyone, whether you dream of a sporting career, simply a sports enthusiast, or want to unlock discipline & fitness.
                  </p>
                  <Button label="View Courses"
                    onClick={() => router.push('/courses')}
                    rounded className='joinlist-btn-blue' />
                </div>
              </Col>
              <Col xs={12} md={5} lg={1}></Col>
              <Col xs={12} md={5} lg={2} className="abt-cards">
                <Card>
                  <Card.Body>
                    <Card.Title className="title">
                      for kids
                    </Card.Title>
                    <Card.Text className="desc">
                      Gain an early advantage in your sports journey with athleriZe. Learn from world-class experts, master essential techniques & watch your skills soar.
                    </Card.Text>
                    <Card.Link href="#" className="link">start early
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
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={5} lg={2} className="abt-cards">
                <Card>
                  <Card.Body>
                    <Card.Title className="title">
                      for college students
                    </Card.Title>
                    <Card.Text className="desc">
                      Open the gateway to a thriving career in the sports industry. Learn from the best, master your craft, & shape your destiny.
                    </Card.Text>
                    <Card.Link href="#" className="link">skill up
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
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={5} lg={2} className="abt-cards">
                <Card>
                  <Card.Body>
                    <Card.Title className="title">
                      sports enthusiasts
                    </Card.Title>
                    <Card.Text className="desc">
                      Gain expert advice & insights to improve physical & mental wellbeing, game, learn skills like focus, resilience & discipline or simply elevate your fan experience.
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
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={5} lg={2} className="abt-cards">
                <Card>
                  <Card.Body>
                    <Card.Title className="title">
                      for athletes
                    </Card.Title>
                    <Card.Text className="desc">
                      Master advanced techniques & unlock peak performance with sessions, guidance & insights from world-class athletes, renowned coaches, & expert instructors.
                    </Card.Text>
                    <Card.Link href="#" className="link">step up
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
                            strokeLinejoin="round"
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
              <div className='col-md-6'>
                <p>the athleriZe advantage</p>
                <h1>building careers beyond <br />the game</h1>
                <p>with focused courses, expert guidance, <br></br> and mentoring.  </p>
                <img src='/assets/images/sai-career.png' className='career-img hide-mobile' />
              </div>
              <div className='col-md-6'>
                <div className='row career-options'>
                  <div className='col-md-6 blocks'>
                    <Row>
                      <Col lg="3"><img src='/assets/images/career.svg' /></Col>
                      <Col lg="6">
                        <p>Expert instructors & top athletes
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className='col-md-6 blocks'>
                    <Row>
                      <Col lg="3"><img src='/assets/images/career.svg' /></Col>
                      <Col lg="6">
                        <p>Personalized learning paths</p>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className='row career-options'>
                  <div className='col-md-6 blocks'>
                    <Row>
                      <Col lg="3"><img src='/assets/images/career.svg' /></Col>
                      <Col lg="6">
                        <p>Affordable Pricing</p>
                      </Col>
                    </Row>
                  </div>
                  <div className='col-md-6 blocks'>
                    <Row>
                      <Col lg="3"><img src='/assets/images/career.svg' /></Col>
                      <Col lg="6">
                        <p>Career advancement  </p>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className='row career-options'>
                  <div className='col-md-6 blocks'>
                    <Row>
                      <Col lg="3"><img src='/assets/images/career.svg' /></Col>
                      <Col lg="6">
                        <p>World-class mentorship</p>
                      </Col>
                    </Row>
                  </div>
                  <div className='col-md-6 blocks'>
                    <Row>
                      <Col lg="3"><img src='/assets/images/career.svg' /></Col>
                      <Col lg="6">
                        <p>Diverse topics for diverse users
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
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
            <div className='row'>
              <div className='col-md-2'>
                <img src='/assets/images/oa.png' alt='' />
              </div>
              <div className='col-md-2'>
                <img src='/assets/images/hh.png' alt='' />
              </div>
              <div className='col-md-2'>
                <img src='/assets/images/hbh.png' alt='' />
              </div>
              <div className='col-md-2'>
                <img src='/assets/images/blitz.png' alt='' />
              </div>
              <div className='col-md-2'>
                <img src='/assets/images/bf.png' alt='' />
              </div>
              <div className='col-md-2'>
                <img src='/assets/images/inde.png' alt='' />
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
