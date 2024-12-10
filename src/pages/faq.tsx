import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <Header />
      <div className="faq-page">
        <div className="header-main">
          <h1>faq</h1>
          <p>Answers to Frequently Asked Questions</p>
        </div>
        <Container className="my-5">
          <Row className="py-5">
            <Col>
              <h3>
                General <span style={{ color: "#0089D1" }}>Information</span>{" "}
              </h3>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is athleriZe?</Accordion.Header>
                  <Accordion.Body>
                    <p>athleriZe is an online platform designed to nurture aspiring athletes and sports enthusiasts by offering live webinars conducted by sports experts, coaches, and professionals.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Who are the webinars designed for?</Accordion.Header>
                  <Accordion.Body>
                    <p>Our webinars are specially curated for kids, school students, parents, aspiring athletes, and anyone interested in exploring sports as a career or improving their sports skills.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>What topics are covered in the webinars?</Accordion.Header>
                  <Accordion.Body>
                    <p>Our webinars cover a wide range of topics, including grassroots-level coaching, sports training techniques, career guidance in sports, technology, design, fitness tips, and more exclusive sessions with international athletes and coaches.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Who are the speakers or coaches?</Accordion.Header>
                  <Accordion.Body>
                    <p>Our speakers and coaches include experienced athletes, certified coaches, and sports educators with years of expertise in their respective fields.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Will you expand beyond webinars in the future?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, stay tuned for updates!</p>
                  </Accordion.Body>
                </Accordion.Item>


              </Accordion>
            </Col>
            <Col>
              <h3>
                Registration & <span style={{ color: "#0089D1" }}>Payment</span>{" "}
              </h3>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do I register for a webinar?</Accordion.Header>
                  <Accordion.Body>
                    <p>You can register through our website by selecting the desired webinar, filling out the registration form, and completing the payment process.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>What payment methods are accepted?</Accordion.Header>
                  <Accordion.Body>
                    <p>We accept major payment methods, including credit/debit cards, UPI, net banking, and digital wallets.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Can I register for multiple webinars at once?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, you can register for multiple webinars.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Are there any discounts for multiple registrations?</Accordion.Header>
                  <Accordion.Body>
                    <p>Occasionally, we offer discounts or promo codes for participants and our partners. Check our website or social media for any ongoing offers.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>What if I miss the live session? Will I get a refund?</Accordion.Header>
                  <Accordion.Body>
                    <p>Unfortunately, we don’t offer refunds for missed sessions. However, if a recording is available, we will share it with registered participants.</p>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </Col>
          </Row>
          <Row className="py-5">
            <Col>
              <h3>
                Sessions <span style={{ color: "#0089D1" }}>Experience</span>{" "}
              </h3>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do I access the webinar?</Accordion.Header>
                  <Accordion.Body>
                    <p>Once registered, you’ll receive an email with a unique link to join the webinar. Please check your spam/junk folder if you don’t see it.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Do I need to download any software to attend?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, most webinars are hosted on Zoom or similar platforms. You can either download the app or access it via a web browser.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Can I interact with the speakers during the webinar?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, most webinars feature live Q&A sessions, where you can ask questions directly to the instructors.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>What if I join the webinar late?</Accordion.Header>
                  <Accordion.Body>
                    <p>You can still join the webinar using your unique link, but we encourage participants to join on time to avoid missing important content.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Will the webinar be recorded?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, most webinars are recorded, and registered participants may receive access to the recordings after the session.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>Will I receive any materials or resources after the webinar?</Accordion.Header>
                  <Accordion.Body>
                    <p>Depending on the webinar, you may or may not receive additional resources. Please check the course description to see if resources are provided.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>Can parents or guardians attend the webinars with their children?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, parents are encouraged to attend, especially for webinars focused on career guidance or sports parenting.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>How often are webinars conducted?</Accordion.Header>
                  <Accordion.Body>
                    <p>Webinars are conducted regularly. Visit our website to stay updated on upcoming sessions.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header>Can I request a specific topic for a webinar?</Accordion.Header>
                  <Accordion.Body>
                    <p>We value participant feedback and suggestions! Feel free to share your ideas with us at hello@athlerize.com.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header>Do I get a certificate for attending?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, participants will receive a digital certificate of attendance, which will be sent to the email ID provided during registration.</p>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </Col>
            <Col>
              <h3>
                Policies & <span style={{ color: "#0089D1" }}>Support</span>{" "}
              </h3>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Can I cancel or transfer my registration?</Accordion.Header>
                  <Accordion.Body>
                    <p>Once purchased, you cannot cancel the course. You may however choose to join a different batch or let another candidate attend the course instead of you. Please check our Cancellation Policy.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>What is your refund policy?</Accordion.Header>
                  <Accordion.Body>
                    <p>All the courses are non-refundable.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is there any age restriction for the webinars?</Accordion.Header>
                  <Accordion.Body>
                    <p>Our webinars are open to participants of all ages who share an interest in sports.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Is my personal information safe?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, we take participant privacy seriously. Your information will not be shared or used without your consent.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>How do I contact customer support?</Accordion.Header>
                  <Accordion.Body>
                    <p>You can reach us at hello@athlerize.com.</p>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
