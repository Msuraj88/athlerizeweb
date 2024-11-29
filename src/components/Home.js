import { Button } from 'primereact/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CourseCard from '../shared/courseCard'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  const navigate = useNavigate()
  const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDnlZ5kZe7dgk9RCzy1-csgiZ3GBIRDnBHxYx83zynjhv9Fg/viewform?embedded=true'
  return (
    <div className='main-home-container'>
      <div className='home-container'>
      <h1>
        where <span>sports</span> meets learning.
      </h1>
      <p>Learn from the best and take your next step with confidence.</p>
      <Button label="View Courses" onClick={() => window.open(waitlistUrl, '_blank')} rounded className='joinlist-btn' />
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
        <Button label="View All" severity="info" outlined rounded />
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
    </div>
  )
}

export default Home