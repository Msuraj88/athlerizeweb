import Header from '@/app/components/Header'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

const Checkout = () => {
  return (
    <> 
        <Header />
        <div className='pp-page'>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={7} className='bg-body p-3 rounded-4'>
                        <h3>customer information</h3>
                        <span>all fields are mandatory*</span>
                        <p className='my-4'>Note: Please provide a valid email and phone number to receive the receipt and session zoom invite. </p>
                        <div className='form-details'>
                            <InputText keyfilter="int" placeholder="Your full Name" />
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-search"></i>
                                </span>
                                <InputText placeholder="Hyderabad, Telangana, India" />
                            </div>
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                <img src='/assets/images/flag.png' alt='' />
                                </span>
                                <InputText placeholder="Your Mobile Number" />
                            </div>
                            <InputText keyfilter="int" placeholder="Your email ID" />
                            <Button label="Make Payment" severity="info" />
                            <p className='text-center'>
                                <img src='/assets/images/lock.png' style={{verticalAlign: 'middle'}} alt='' /> secure payment
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={5} lg={4} className='bg-body p-3 rounded-4 mx-xxl-4 mx-md-4'>
                        <h3>order summary</h3>
                        <hr className='my-4' />
                        <p className='my-4'>Webinar Course Title <span style={{float: 'right'}}>INR 2499</span></p>
                        <hr className='my-5' />
                        <div className="d-flex flex-column gap-2 my-5">
                            <label htmlFor="username">Coupon Code</label>
                            <InputText id="username" aria-describedby="username-help" />
                            {/* <small id="username-help">
                                Enter your username to reset your password.
                            </small> */}
                        </div>
                        <hr className='my-5' />
                        <p className='my-4'>Total <span style={{float: 'right'}}>INR 2499</span></p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Checkout