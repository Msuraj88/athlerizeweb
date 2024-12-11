
import React, { useState } from 'react';
import { Nav, Accordion } from 'react-bootstrap';
import Header from '@/app/components/Header'
import Footer from "@/app/components/Footer";


const CourseDetails = () => {

  const [activeTab, setActiveTab] = useState<string>('description');

  return (
    <div>
      <Header />
      <div className="course-sdetails-page">
        <div className="header-main">
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 text-sec'>
                <div className='Course-info-chips'>
                  <span className="badge badge-type">Online Webinar</span>
                  <span className="badge badge-intigration"><span>  <img src='/assets/images/zoom.svg' className='career-img' /></span>Zoom </span>

                </div>
                <div className='Course-title'>
                  <h1 className='m-0 mt-16  '>From Grassroots to Glory: Building a Career in Sports
                  </h1>
                  <p className='text-left'>
                    Find courses that fit your passion, whether active or coming soon!
                  </p>
                </div>
                <div className='teacher-info-sec'>
                  <div className='teacher-img'>
                    <img src='/assets/images/sai-avatar.png' className='career-img' />
                  </div>
                  <div className='teacher-info'>
                    <h5>By Sai Praneeth B </h5>
                    <p>Olympian, Former World No 10 Badminton Player</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className='Course-info-sec'>
          {/* <div className='tab-nav-sec'>
            <div className='container'>
              <Nav variant="underline" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="# ">Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Curriculum</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Instructor</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div> */}

          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>

                <div className='tab-nav-sec'>
                  <div className='container'>
                    <Nav
                      variant='underline'
                      activeKey={activeTab}
                      onSelect={(selectedKey) => setActiveTab(selectedKey || 'description')}
                      className='custom-tabs'
                    >
                      <Nav.Item className='custom-tab-item'>
                        <Nav.Link eventKey='description' className='custom-tab-link'>Description</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className='custom-tab-item'>
                        <Nav.Link eventKey='curriculum' className='custom-tab-link'>Curriculum</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className='custom-tab-item'>
                        <Nav.Link eventKey='instructor' className='custom-tab-link'>Instructor</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <div className='tab-content'>
                      {activeTab === 'description' &&
                        <div>
                          <div className='course-abt-sec'>
                            <h3 className='title'>About <span>Course</span></h3>
                            <p>From Grassroots to Glory: Building a Career in Sports is a dynamic and interactive workshop led by Sai Praneeth, designed for students, young athletes, and parents who want to explore sports as a career path. </p>
                            <p>This workshop provides deep insights into the steps required to build a successful sports career—from the basics of training to the critical importance of mental toughness, discipline, and balancing academics. Participants will receive personalized feedback and direct advice from Sai Praneeth, gaining valuable tools to enhance their growth as athletes or sports professionals.</p>
                            <div className='row'>
                              <div className='col'>
                                <div className='abt-cards'>
                                  <h5>Language</h5>
                                  <p>English, Hindi,
                                    Telugu</p>
                                </div>
                              </div>
                              <div className='col'>
                                <div className='abt-cards'>
                                  <h5>Levels</h5>
                                  <p>Basic,
                                    Intermediate</p>
                                </div>
                              </div>
                              <div className='col'>
                                <div className='abt-cards'>
                                  <h5>Class Length</h5>
                                  <p>2 Days
                                    (1 hr/day)</p>
                                </div>
                              </div>

                            </div>
                          </div>

                          <hr className='cust-divider'></hr>

                          <div className='course-who-sec'>
                            <h3 className='title'>who is this <span>course for?</span></h3>
                            <div className='who-list'>
                              <ul className='cust-list'>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  Students and Young Athletes
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span> Parents
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span> Aspiring Sports Professionals
                                </li>
                              </ul>
                            </div>
                          </div>


                          <hr className='cust-divider'></hr>

                          <div className='course-who-sec'>
                            <h3 className='title'>what will you <span> learn?</span></h3>
                            <div className='who-list'>
                              <ul className='cust-list'>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Understanding the Journey:</strong> A comprehensive look at the journey of a sports career — from early-stage training to reaching a professional level.
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Physical and Mental Preparedness</strong> Insights into the physical training and mental toughness required for sports.

                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Balancing Academics and Sports: </strong> How to manage both studies and sports commitments, and why academics are still important.

                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Building a Strong Foundation:</strong> Steps to develop essential skills, discipline, and routine from a young age.

                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Support System and Role of Parents:</strong> Importance of parental support, mentorship, and the role family plays in an athlete's success.


                                </li>

                              </ul>
                            </div>
                          </div>


                          <hr className='cust-divider'></hr>

                          <div className='course-who-sec highlight-sec'>
                            <h3 className='title'>key <span> highlights</span></h3>
                            <div className='Highlight-list'>
                              <span>Learn from an Olympian</span>
                              <span>Practical Insights</span>

                              <span>Earn a Certificate</span>  <span>Parent & Student Guidance</span>  <span>Live Q&A Sessions</span>
                              <span>Actionable Tips</span>
                            </div>
                          </div>

                          <div className='certification-section'>
                            <div className='row'>
                              <div className='col-md-8'>
                                <h3 className='title'>key <span> highlights</span></h3>
                                <p>Upon successfully completing the course, participants will receive a digital Certificate of Excellence to your registered email id, signed by the course instructor, athleriZe and Olympian Sai Praneeth.</p>
                              </div>
                              <div className='col-md-4'>
                                <img src='/assets/images/cert.png' className='career-img' />
                              </div>
                            </div>
                          </div>


                        </div>
                      }
                      {activeTab === 'curriculum' &&
                        <div className='Curriculum-section'>
                          <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header className='Accordion-tab-cust'>Day 1: Understanding Sports and Exploring Pathways
                              </Accordion.Header>
                              <Accordion.Body>

                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 1</div>
                                  <div className="col">Introduction to Sports</div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 2</div>
                                  <div className="col">Choosing the Right Sport</div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 3</div>
                                  <div className="col">Physical Fitness and Mental Toughness</div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 4</div>
                                  <div className="col">Choosing the Right Sport</div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 5</div>
                                  <div className="col">Physical Fitness and Mental Toughness</div>
                                </div>

                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Day 2: Understanding Sports and Exploring Pathways</Accordion.Header>
                              <Accordion.Body>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 1</div>
                                  <div className="col">Introduction to Sports</div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 2</div>
                                  <div className="col">Choosing the Right Sport</div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 3</div>
                                  <div className="col">Physical Fitness and Mental Toughness</div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 4</div>
                                  <div className="col">Choosing the Right Sport</div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-auto fw-bold">Module 5</div>
                                  <div className="col">Physical Fitness and Mental Toughness</div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      }
                      {activeTab === 'instructor' &&
                        <div className='Instructor-tab-sec'>
                          <h4 className='mb-24'>Instructor</h4>

                          <div className='instructor1 mb-24'>
                            <div className='teacher-info-sec'>
                              <div className='teacher-img'>
                                <img src='/assets/images/sai-avatar.png' className='career-img' />
                              </div>
                              <div className='teacher-info'>
                                <h5>By Sai Praneeth B </h5>
                                <p>Olympian, Former World No 10 Badminton Player</p>
                              </div>
                            </div>

                            <p>Former world no 10, an Olympian, and a champion sportsperson and one of the greatest and most successful badminton athletes in India. Sai Praneeth's name is etched in record books as the first Indian male shuttler in 36 years to win a bronze medal in the BWF World Championships in 2019, . His stunning wins against the all-time greats -- Muhammad Hafiz Hashim, Taufik Hidayat, Hu Yun, Lee Chong Wei in International circuit, bore testament to his mental strength and his rock-solid technique. Sai Praneeth serves as our Brand Ambassador and a Strategist; works closely with the Founder, together to improve, strengthen and scale the growth of athleriZe.</p>
                          </div>

                          <hr className="cust-divider mb-24"></hr>

                          <div className='instructor2'>
                            <div className='teacher-info-sec'>
                              <div className='teacher-img'>
                                <img src='/assets/images/sai-avatar.png' className='career-img' />
                              </div>
                              <div className='teacher-info'>
                                <h5>By Sai Praneeth B </h5>
                                <p>Olympian, Former World No 10 Badminton Player</p>
                              </div>
                            </div>

                            <p>Former world no 10, an Olympian, and a champion sportsperson and one of the greatest and most successful badminton athletes in India. Sai Praneeth's name is etched in record books as the first Indian male shuttler in 36 years to win a bronze medal in the BWF World Championships in 2019, . His stunning wins against the all-time greats -- Muhammad Hafiz Hashim, Taufik Hidayat, Hu Yun, Lee Chong Wei in International circuit, bore testament to his mental strength and his rock-solid technique. Sai Praneeth serves as our Brand Ambassador and a Strategist; works closely with the Founder, together to improve, strengthen and scale the growth of athleriZe.</p>
                          </div>



                        </div>


                      }
                    </div>
                  </div>
                </div>



              </div>

              <div className='col-md-4'>
                <div className='course-teacher-right'>
                  <div className='course-thumb-img'>
                    <img src='/assets/images/card-img.png' className='w-100' />
                  </div>
                  <div className='course-enroll-info'>
                    <button className='enroll-btn mt-16' onClick={() => window.open('https://payments.cashfree.com/forms/saipraneethcourse1', '_blank')}>Enroll Now</button>
                    <h4 className='Black-text '>INR 999/-</h4>
                    <p className='offer-text-clr p-0 m-0'>Special offer ends soon</p>
                    <p className='Black-text'>(limited slots available)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default CourseDetails