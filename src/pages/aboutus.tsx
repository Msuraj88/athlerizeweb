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
          <p>
            You know what we do. Now learn why we do what we do - and <br />
            the people who make it happen.
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
                athleriZe is an e-learning platform dedicated to sports and all
                the diverse areas that surround it. We’re on a mission to make
                sports education accessible to athletes, enthusiasts, and
                professionals alike, bridging the gap between knowledge and
                passion.
              </p>
              <p>
                Whether it’s honing your skills, exploring new disciplines, or
                gaining insights into the sports industry, athleriZe is here to
                fuel your passion and drive your progress. Our platform is
                designed to be a community-driven space where you can learn from
                the best in the industry, connect with like-minded individuals,
                and take steps towards achieving your dreams in sports and
                beyond.
              </p>
              <p>
                <b>
                  We envision a future where learning sports-related skills is
                  as effortless and enjoyable as playing the game itself.
                </b>
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
            <Col xs={3} md={3} lg={3}></Col>
            <Col xs={8} md={8} lg={8}>
              <p>
                To make high-quality sports education accessible, affordable,
                and inspiring for everyone, everywhere.
              </p>
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
          <div className="text-cont">
            <h3>
              A Message from the <br />
              Mastermind
            </h3>
            <p>
              As a professional athlete, I know the value of learning from the
              best. athleriZe offers tailored programs for athletes, students,
              working professionals of any age, level and everyone in between.
              Join our community of learners and take your passion to the next
              level.
            </p>
            <h5>Sai Praneeth B</h5>
            <p className="small">
              <small>Founding Partner, athleriZe</small>
            </p>
            <p className="small">
              <small>
                Arjuna Awardee, Olympian, Former World No. 10 Badminton Player.
              </small>
            </p>
          </div>
          <div className="img-cont">
            <img src="/assets/images/sai-msg.png" />
          </div>
        </div>
        <Container className="py-5">
          <Row className='page-cards'>
            <Col xs={12} md={5} lg={3}>
              <div>
                <h1>who can <span style={{ color: "#0089D1" }}>use?</span></h1>
                <p>Find courses that fit your passion, whether active or coming soon! Find courses that fit your passion.</p>
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
                  <AbtCards name={'Anil Kumar M'} desc={'Founder, Captain'} email={'anil@athlerize.com'} />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards name={'Sai Praneeth B'} desc={'Founding Partner, Vice Captain'} email={''} />
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Container>
          </div>
          <div className="abt-us-margin">
            <h2 className="m-4">our <span style={{ color: "#0089D1" }}>star squad</span></h2>
            <Container>
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards name={'Kamala Grace'} desc={'All Rounder'} email={''} />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards name={'Ritika'} desc={'All Rounder'} email={''} />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards name={'Sreevatsa C'} desc={'All Rounder'} email={''} />
                </Col>
                <Col>
                  <AbtCards name={'Tarun Raidu'} desc={'All Rounder'} email={''} />
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <AbtCards name={'Sharanya'} desc={'All Rounder'} email={''} />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="abt-us-margin">
            <h2 className="m-4">our <span style={{ color: "#0089D1" }}>coaches (advisors)</span></h2>
            <Container>
              <Row noGutters>
                <Col  xs={12} md={6} lg={3}>
                <div className='abt-card-container m-auto text-center my-3'>
                  <img src='/assets/images/nandiraju.png' />
                  <h2>Srikanth N</h2>
                  <h5>Technology</h5>
              </div>
                </Col>
                <Col  xs={12} md={6} lg={3}>
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
        <div className="text-center">
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
