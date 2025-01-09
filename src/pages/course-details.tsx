
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
                  <h2 className=' mt-16 mb-24 '>From Grassroots to Glory: Building a Career in Sports
                  </h2>
                  {/* <p className='text-left'>
                    Find courses that fit your passion, whether active or coming soon!
                  </p> */}
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
                    <div className='tab-sec-list'>
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
                    </div>

                    <div className='tab-content'>
                      {activeTab === 'description' &&
                        <div>
                          <div className='course-abt-sec'>
                            <h3 className='title'>About <span>Course</span></h3>
                            <p>From Grassroots to Glory: Building a Career in Sports is a dynamic and interactive workshop led by Sai Praneeth, designed for students, young athletes, and parents who want to explore sports as a career path. </p>
                            <p>This workshop provides deep insights into the steps required to build a successful sports career—from the basics of training to the critical importance of mental toughness, discipline, and balancing academics. Participants will receive personalized feedback and direct advice from Sai Praneeth, gaining valuable tools to enhance their growth as athletes or sports professionals.</p>
                            <div className='row g-3'>
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
                                <h3 className='title'>earn <span> certificate</span></h3>
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
                                  <div className="fw-bold mb-16">Introduction to Sports </div>
                                  <div ><li>Overview of sports disciplines: Individual vs. team sports.
                                  </li>
                                    <li>
                                      Popular sports (e.g., badminton, cricket, football, athletics) and their global appeal.
                                    </li></div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Choosing the Right Sport </div>
                                  <div ><li>Factors Influencing Sport Selection: Interests, physical traits, and strengths (e.g., height, stamina, flexibility).
                                  </li>
                                    <li>
                                      Exploring Different Sports: Encouraging participants to try various sports to find their true passion.
                                    </li>
                                    <li>
                                      Real-Life Inspiration: Sharing stories of famous athletes who discovered their passion through exploration (e.g., Michael Jordan’s journey).
                                    </li></div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Physical Fitness and Mental Toughness </div>
                                  <div ><li>Physical Fitness: Basics of staying fit, importance of exercise, diet, and recovery for young athletes..
                                  </li>
                                    <li>
                                      Mental Toughness: Introduction to resilience, focus, and building a positive mindset to handle challenges in sports and life.
                                    </li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Life as a Professional Athlete</div>
                                  <div ><li>Training Routines & Healthy Habits: A look into a professional athlete’s schedule, including training, rest, and diet.
                                  </li>
                                    <li>
                                      What It Takes to Be Successful: Discussing the key values of passion, discipline, and persistence.
                                    </li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Fundamental Skills for Any Sport </div>
                                  <div ><li>Core Skills: Developing coordination, agility, teamwork, and communication.
                                  </li>
                                    <li>
                                      Practical Tips: How to begin building skills that are applicable across all sports disciplines.
                                    </li>
                                  </div>
                                </div>

                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Day 2: Pathways to Becoming a Professional Athlete</Accordion.Header>
                              <Accordion.Body>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">What It Takes to Become a Professional Athlete</div>
                                  <div>
                                    <li>
                                      Core Values: Passion, discipline, and mindset as essential traits for athletes.
                                    </li>
                                    <li>
                                      Managing Setbacks: Learning how athletes overcome injuries, losses, and other challenges.
                                    </li>
                                    <li>
                                      Practical Steps to Start: Steps to take now, like joining clubs, finding coaches, or entering local competitions.
                                    </li>
                                  </div>

                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Role of Sports in Shaping Character and Academics</div>
                                  <div>
                                    <li>
                                      Building Discipline & Teamwork: How sports instill values that help in academics and future opportunities.
                                    </li>
                                    <li>
                                      Positive Impacts on Academics: Exploring how sports participation improves focus, responsibility, and academic performance.
                                    </li>
                                  </div>

                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Building a Path to Success</div>
                                  <div>
                                    <li>
                                      Mapping Goals: Setting short-term and long-term goals for academic and athletic achievements.
                                    </li>
                                    <li>
                                      Building Resilience: Handling pressure and creating a balanced, healthy lifestyle as a student-athlete.
                                    </li>
                                  </div>

                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Family Support and Financial Planning</div>
                                  <div>
                                    <li>
                                      Role of Parents: How families can support young athletes in balancing academics and sports.
                                    </li>
                                    <li>
                                      Financial Support in Sports: A brief overview of costs (training, equipment, travel) and ways to access scholarships, sponsorships, and other funding opportunities.
                                    </li>
                                  </div>

                                </div>

                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      }
                      {activeTab === 'instructor' &&
                        <div className='Instructor-tab-sec'>
                          <h4 className='mb-24'>Instructor</h4>



                          <div className='instructor2  mb-24'>
                            <div className='teacher-info-sec'>
                              <div className='teacher-img'>
                                <img src='/assets/images/sai-avatar.png' className='career-img' />
                              </div>
                              <div className='teacher-info'>
                                <h5>By Sai Praneeth B </h5>
                                <p>Olympian, Former World No 10 Badminton Player</p>
                              </div>
                            </div>

                            <p>Former world no 10 Badminton Player, Arjuna Awardee, an Olympian, a champion sportsperson and one of the greatest and most successful badminton athletes in India.</p>
                            <p>Sai Praneeth's name is etched in record books as the first Indian male shuttler in 36 years to win a bronze medal in the BWF World Championships in 2019. Sai Praneeth brings years of professional experience to athleriZe. His journey from a young player to a world class player reflects his passion, dedication, and deep understanding of the game. </p>
                            <p>As an instructor, he’s committed to guiding aspiring athletes by sharing practical skills, game strategies, and valuable insights from his professional career. Sai Praneeth’s goal is to inspire and nurture the next generation of sports enthusiasts with his expertise and love for the sport.</p>

                          </div>



                        </div>


                      }
                    </div>
                  </div>
                </div>



              </div>

              <div className='col-md-4 d-none d-sm-block'>
                <div className='course-teacher-right'>
                  <div className='course-thumb-img'>
                    <img src='/assets/images/t-saipraneeth.png' className='w-100' />
                  </div>
                  <div className='course-enroll-info text-center'>
                    {/* <button className='enroll-btn mt-16' onClick={() => window.open('https://payments.cashfree.com/forms/testsppa', '_blank')}>Enroll Now</button> */}
                    <button className='enroll-btn mt-16' onClick={() => window.open('https://payments.cashfree.com/forms/saipraneethcourse1', '_blank')}>Enroll Now</button>
                    <h4 className='Black-text mt-24'>INR 999 <span className='text-strike'>2499</span></h4>                    <p className='offer-text-clr p-0 m-0'>Special offer ends soon</p>
                    <p className='Black-text'>(limited slots available)</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className='mobile-enroll-btn d-block d-sm-none'>
            <div className='course-enroll-info text-center'>
              {/* <button className='enroll-btn mt-16' onClick={() => window.open('https://payments.cashfree.com/forms/testsppa', '_blank')}>Enroll Now</button> */}
              <h5 className='Black-text'>INR 999 <span className='text-strike'>2499</span></h5>                    <p className='offer-text-clr p-0 m-0'>Special offer ends soon</p>
              <p className='Black-text'>(limited slots available)</p>
              <button className='enroll-btn mt-8' onClick={() => window.open('https://payments.cashfree.com/forms/saipraneethcourse1', '_blank')}>Enroll Now</button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default CourseDetails