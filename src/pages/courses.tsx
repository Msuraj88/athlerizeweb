import CourseCard from '@/app/components/courseCard'
import Header from '@/app/components/Header'
import Footer from "@/app/components/Footer"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import '../app/globals.scss'

const Courses = () => {
  return (
    <>
      <Header />
      <div className='courses-page'>
        <div className='header-main'>
          <h1>
            Your learning journey starts here
          </h1>
          <p>Find courses that fit your passion and goals</p>
        </div>
        <div className='main-courses'>
          <div className='header-section'>
            <div>
              <h1>our <span>courses</span></h1>
              <p>Browse our active and upcoming courses</p>
            </div>
            <Container className='course-card-sec'>
              <Row>
                <div className='col-md-4'><CourseCard bgImg={'t-saipraneeth'} title={"SAI PRANEETH"} desc={'From Grassroots to Glory: Building a Career in Sports'} isLaunchSoon={false} route='/course-details'/></div>
                <div className='col-md-4'><CourseCard bgImg={'kunal'} title={"KUNAL SAMANT"} desc={'Mastering the Art of Sports Content Creation'} isLaunchSoon={false} route='/kunal-samant'/></div>
                <div className='col-md-4'><CourseCard bgImg={'revanth2'} title={"REVANTH TUMMALA"} desc={'Capturing the Game: The Art of Sports Photography'} isLaunchSoon={true} /></div>
                <div className='col-md-4'><CourseCard title={"JAGANNADH DAS"} desc={'Beyond the Scoreboard: Sports Writing & Journalism'} bgImg={'das'} isLaunchSoon={true} /></div>
                <div className='col-md-4'><CourseCard title={"SIYAADATH ULLAH"} desc={'Career Smash: Turning Badminton Dreams into Reality'} bgImg={'siya'} isLaunchSoon={true} /></div>
                <div className='col-md-4'><CourseCard title={"KARTHIK YANAMANDRA"} desc={'Marketing the Game: Sports, Strategy and Success'} bgImg={'karthik'} isLaunchSoon={true} /></div>
                {/* <Col><CourseCard   bgImg={'t-saipraneeth'}isLaunchSoon={true} /></Col>
                        <Col><CourseCard  isLaunchSoon={true} /></Col>
                        <Col><CourseCard isLaunchSoon={true} /></Col> */}
              </Row>
            </Container>
          </div>
        </div>
        <div className='partners-section'>
          <div className='header'>
            <div>
              <h1>Our <span>partners</span></h1>
              <p>Collaborating with the best to bring you to the best</p>
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

export default Courses