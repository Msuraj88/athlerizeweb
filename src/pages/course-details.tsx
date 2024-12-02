import Header from '@/app/components/Header'
import React from 'react'
import Nav from 'react-bootstrap/Nav';

const CourseDetails = () => {
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
                  <h1 className='m-0'>From Grassroots to Glory: Building a Career in Sports
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
              <div className='col-md-4'>
                <div className='course-teacher-right'>
                  <div className='course-thumb-img'>
                  <img src='/assets/images/card-img.png' className='w-100' />
                  </div>
                  <div className='course-enroll-info'>
                    <button className='enroll-btn'>Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Course-info-sec'>
          <div className='tab-nav-sec'>
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
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
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
                    <ul>
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
                    <ul>
                      <li>
                        <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Understanding the Journey:</strong> A comprehensive look at the journey of a sports career — from early-stage training to reaching a professional level.
                      </li>
                      <li>
                        <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Understanding the Journey:</strong> A comprehensive look at the journey of a sports career — from early-stage training to reaching a professional level.
                      </li>
                      <li>
                        <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Understanding the Journey:</strong> A comprehensive look at the journey of a sports career — from early-stage training to reaching a professional level.
                      </li>
                      <li>
                        <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Understanding the Journey:</strong> A comprehensive look at the journey of a sports career — from early-stage training to reaching a professional level.
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

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CourseDetails