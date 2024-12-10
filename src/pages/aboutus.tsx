import AbtCards from "@/app/components/abtCard";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Aboutus = () => {
  const router = useRouter()
  return (
    <>
      <Header />
      <div className="aboutus-container">
        <div className="header-main-white">
          <h1>
            what <span style={{ color: "#0089D1" }}>athleriZe</span> is all
            about
          </h1>
          <p style={{ maxWidth: '600px', margin: '16px auto', fontWeight: "200" }}>
            You may have a fair idea of what we do. Here’s why we do what we do, our mission, and the people who make everything happen.
          </p>
        </div>
        <div className="text-center m-5">
          <img src="/assets/images/abt-img.png" alt="" width={'100%'} />
        </div>
        <Container className="abt-section p-5">
          <Row>
            <Col xs={3} md={3} lg={3}>
              <h2>
                about <span style={{ color: "#0089D1" }}>us</span>
              </h2>
            </Col>
            <Col xs={8} md={8} lg={8}>
              <p>
                We are an e-learning platform dedicated to all things sports. We are passionate about empowering athletes at all levels, from school & college students to budding stars & seasoned professionals, through world-class courses, expert mentorship, strategic guidance, and tools to elevate their game.
              </p>
              <p>
                But athleriZe isn’t just for athletes! We make sports learning, expert insights and guidance accessible to sports enthusiasts and aspiring sports industry professionals. Whether you aim to refine your skills, advance your career, or simply deepen your love for sports, athleriZe has something for you.
              </p>
              <p>
                Our range of affordable courses, workshops, and seminars are taught by accomplished athletes, renowned coaches, & expert instructors.
              </p>
              <p>
                By making sports learning affordable and accessible to all, we're ushering in a future where learning sports-related skills is as easy and enjoyable as playing the game itself.
              </p>
            </Col>
          </Row>
          <Row
            style={{
              background: "#dbe8f0",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <Col xs={3} md={3} lg={3}><h4>
              our <span style={{ color: "#0089D1" }}>mission</span>
            </h4></Col>
            <Col xs={8} md={8} lg={8}>
              <p>
                To make high-quality sports education accessible, affordable,
                and inspiring for everyone, everywhere.
              </p>

            </Col>
            <Col xs={3} md={3} lg={3}><h4>
              our <span style={{ color: "#0089D1" }}>vission</span>
            </h4></Col>
            <Col xs={8} md={8} lg={8}>

              <p>
                To become the go-to e-learning platform for everything sports.
              </p>
            </Col>
          </Row>
        </Container>
        <div
          className="message-section"
          style={{ background: "#0089D1", marginTop: "220px" }}
        >
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
                    for college students
                  </Card.Title>
                  <Card.Text className="desc">
                    Open the gateway to a thriving career in the sports industry. Learn from the best, master your craft, & shape your destiny.
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
          </Row>
        </Container>
        <div>
          <div className="text-center">
            <h2>our all-star <span style={{ color: "#0089D1" }}>squad</span></h2>
            <p>Meet the team that makes athleriZe happen</p>
          </div>
          <div className="abt-us-margin">
            <h2 className="m-4">our <span style={{ color: "#0089D1" }}>founding team</span></h2>
            <Container>
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards img={'Anil'} name={'Anil Kumar M'} desc={'Founder, Captain'} email={''} />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards img={'t-sai'} name={'Sai Praneeth B'} desc={'Founding Partner, Vice Captain'} email={''} />
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Container>
          </div>
          <div className="abt-us-margin">
            <Container>
              <h2 className="m-4">our <span style={{ color: "#0089D1" }}>star squad</span></h2>
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards img={'t-kamala'} name={'Kamala Grace'} desc={'All Rounder'} email={''} />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards img={'t-seevatsa'} name={'Sreevatsa C'} desc={'All Rounder'} email={''} />
                </Col>
                <Col>
                  <AbtCards img={'t-raidu'} name={'Tarun Raidu'} desc={'All Rounder'} email={''} />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards img={'t-ritika'} name={'Ritika'} desc={'All Rounder'} email={''} />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards img={'t-sharanya'} name={'Sharanya'} desc={'All Rounder'} email={''} />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="abt-us-margin">
            <h2 className="m-4">our <span style={{ color: "#0089D1" }}>coaches (advisors)</span></h2>
            <Container>
              <Row noGutters>
                <Col xs={12} md={6} lg={3}>
                  <div className='abt-card-container m-auto text-center my-3'>
                    <img src='/assets/images/nandiraju.png' />
                    <h2>Srikanth N</h2>
                    <h5>Technology</h5>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <div className='abt-card-container m-auto text-center my-3'>
                    <img src='/assets/images/namrata.png' />
                    <h2>Namrata Nair</h2>
                    <h5>Legal</h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="container text-center">
          <img src="/assets/images/joinsqd.png" alt="" width={'100%'} />
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
  );
};

export default Aboutus;
