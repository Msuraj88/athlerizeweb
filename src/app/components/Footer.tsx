import { useRouter } from 'next/navigation'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    const router = useRouter()
  return (
    <div className='main-footer-container'>
        <Container className='first-section'>
            <Row>
                <Col lg={4} md={4}>
                    <img src='/assets/images/logo-bw.svg' />
                    <div className='d-flex gap-4 align-items-center m-3 cursor-pointer'>
                        <i className="pi pi-instagram" style={{ color: 'white', fontSize: '1rem', background: 'black', padding: '4px' }} onClick={() => window.open('https://www.instagram.com/athlerize/', '_blank')}></i>
                        <i className="pi pi-linkedin" style={{ color: 'white', fontSize: '1rem' }} onClick={() => window.open('https://www.linkedin.com/company/athlerize/', '_blank')}></i>
                        <i className="pi pi-facebook" style={{ color: 'white', fontSize: '1rem', background: 'black', padding: '4px'  }} onClick={() => window.open('https://www.facebook.com/athlerize', '_blank')}></i>
                        <i className="pi pi-twitter" style={{ color: 'white', fontSize: '1rem', background: 'black', padding: '4px'  }} onClick={() => window.open('https://x.com/athlerize', '_blank')}></i>
                        <i className="pi pi-youtube" style={{ color: 'white', fontSize: '1rem', background: 'black', padding: '4px'  }}></i>
                    </div>
                </Col>
                <Col lg={2} md={2}>
                    <ul>
                        <li onClick={() => router.push('/aboutus')}>About Us</li>
                        <li onClick={() => router.push('/courses')}>Courses</li>
                        <li onClick={() => router.push('/partners')}>Partners</li>
                        <li onClick={() => router.push('/faq')}>FAQ</li>
                        <li onClick={() => router.push('/contact')}>Contact</li>
                    </ul>
                </Col>
                <Col>
                    <div className='px-5'>
                        <p style={{color:'#fff'}}><span style={{ color: "#0089D1" }}>recognized</span> by</p>
                        <div className='d-flex footer-imgs'>
                        <img src='/assets/images/dpiit.png' alt='' />
                        <img src='/assets/images/startup.png' alt='' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className='payments-section p-4'>
        <Container className='text-white'>
            <Row>
                <Col className='footer-section'>
                    <p>2024 WhatsInTheGame Sports & Media Pvt. Ltd.</p>
                    <div className='d-flex gap-2 cursor-pointer'>
                        <span onClick={() => router.push('/privacy-policy')}>Privacy Policy </span> <span>|</span>
                        <span onClick={() => router.push('/terms')}>  Terms & Conditions </span> <span>|</span>
                        <span onClick={() => router.push('/refund')}>Cancellation and Refund Policy</span>
                    </div>
                </Col>
                <Col className='text-end'>
                    <span style={{fontSize: '10px'}}>Payments secured by:</span>
                    <img src='/assets/images/payments.svg' alt='' width={'100%'} />
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default Footer