
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
                  <h2 className=' mt-16  mb-24'>Mastering the Art of Sports Content Creation
                  </h2>
                  {/* <p className='text-left'>
                    Find courses that fit your passion, whether active or coming soon!
                  </p> */}
                </div>
                <div className='teacher-info-sec'>
                  <div className='teacher-img'>
                    <img src='/assets/images/kunal-s.png' className='career-img' />
                  </div>
                  <div className='teacher-info'>
                    <h5>By Kunal Samant</h5>
                    <p>Renowned Sports Content Creator and Storyteller</p>
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
                            <p>Step into the world of sports storytelling with Mastering the Art of Sports Content Creation, a hands-on workshop designed for aspiring creators, sports enthusiasts, and budding storytellers. </p>
                            <p>This course equips participants with the skills to craft engaging, impactful content that resonates with audiences—whether it's capturing the thrill of a match, showcasing an athlete's journey, or building a brand's sports narrative.
                            </p>
                            <p>From learning the fundamentals of content creation and leveraging social media to exploring advanced strategies for audience engagement and analytics, this workshop offers a comprehensive guide to excelling in the sports content industry. Participants will also gain personalized insights from industry experts, ensuring they leave with actionable skills to kick start their journey as sports content creators.</p>
                            <div className='row g-3'>
                              <div className='col'>
                                <div className='abt-cards'>
                                  <h5>Language</h5>
                                  <p>English, Hindi
                                  </p>
                                </div>
                              </div>
                              <div className='col'>
                                <div className='abt-cards'>
                                  <h5>Levels</h5>
                                  <p>Basic,
                                    Intermediate, Expert</p>
                                </div>
                              </div>
                              <div className='col'>
                                <div className='abt-cards'>
                                  <h5>Class Length</h5>
                                  <p>2 days, 1hr/day</p>
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
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  Aspiring Content Creators
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span> Sports Enthusiasts
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span> Freelancers and Social Media Managers
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  Youtubers/Instagrammers
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  Sports Marketing Professionals
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span> Students
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span> Athletes
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
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Understanding Sports Content Creation:</strong> Explore different types of sports content, including interviews, match recaps, fan engagement posts, and behind-the-scenes stories. Learn to craft engaging narratives across formats such as written articles, videos, live streams, and social media posts while mastering the art of storytelling to captivate audiences.
                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Social Media Strategies for Sports:</strong> Develop tailored content strategies for platforms like Instagram, YouTube, Twitter, and TikTok. Discover how to engage fans, foster community interaction, and drive growth using best practices for timing, hashtags, and leveraging trending topics in sports.

                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Content Planning and Production: </strong> Learn to plan a content calendar around sports seasons, events, and milestones. Gain hands-on tips for shooting video, recording interviews, and capturing dynamic visuals—even on a budget. Hone scriptwriting and on-camera techniques for sports presentations.

                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Editing and Post-Production:</strong> Master the basics of video and audio editing to create polished, high-quality sports content. Enhance your work with highlights, graphics, text overlays, and engaging thumbnails that boost visibility and drive interaction.

                                </li>
                                <li>
                                  <span><i className="pi pi-check pi-check" style={{ fontSize: '1rem' }}></i></span>  <strong>Audience Engagement and Analytics:</strong> Build strategies to interact with followers, increase fan engagement, and foster a loyal community. Learn to analyze performance metrics, refine your content strategy, and leverage feedback to consistently improve your output


                                </li>

                              </ul>
                            </div>
                          </div>


                          <hr className='cust-divider'></hr>

                          <div className='course-who-sec highlight-sec'>
                            <h3 className='title'>key <span> highlights</span></h3>
                            <div className='Highlight-list'>
                              <span>Learn from a Renowned Content Creator
                              </span>
                              <span>Practical Insights</span>

                              <span>Earn a Certificate</span>  <span>Community & Professional Guidance</span>  <span>Real-World Case Studies</span>
                              <span>Interactive Live Sessions</span>
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
                              <Accordion.Header className='Accordion-tab-cust'>Day 1: Introduction to Sports Content Creation & Audience Engagement</Accordion.Header>
                              <Accordion.Body>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Understanding Sports Content</div>
                                  <div>
                                    <li>Overview of sports content creation: Types of content (live updates, match recaps, highlights, behind-the-scenes, fan interactions).</li>
                                    <li>The role of storytelling in sports content: Building narratives around key events, players, and moments.</li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Audience Segmentation</div>
                                  <div>
                                    <li>Understanding the different types of sports audiences: Hardcore fans, casual viewers, youth, regional vs. global fans.</li>
                                    <li>Tailoring content for each segment to boost engagement and foster a loyal following.</li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Content Tone and Voice</div>
                                  <div>
                                    <li>Developing a consistent tone and voice for your brand, team, or sports content.</li>
                                    <li>Knowing when to be informal, inspirational, or factual depending on the context of the content and platform.</li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Content Curation and Planning</div>
                                  <div>
                                    <li>Finding and curating relevant content: News, stats, and player updates.</li>
                                    <li>Developing a basic content calendar for key sports events, matches, and milestones.</li>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Day 2: Multi-Platform Strategy, Engagement Techniques, and Data-Driven Content</Accordion.Header>
                              <Accordion.Body>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Platform-Specific Content Strategies</div>
                                  <div>
                                    <li>Adapting content for different platforms (Instagram, Twitter, YouTube, TikTok).</li>
                                    <li>Exploring content formats suited to each platform: Polls, trivia, live commentary, fan shoutouts, and short-form videos.</li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Engaging Your Audience</div>
                                  <div>
                                    <li>Writing compelling headlines and captions to grab attention.</li>
                                    <li>Creating interactive content like Q&As, polls, and fan-driven engagement to encourage sharing and discussion.</li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Maintaining Consistency</div>
                                  <div>
                                    <li>Creating a regular posting schedule around sports events and breaking news.</li>
                                    <li>Tools and tips for ensuring consistent content delivery across platforms without burnout.</li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Tracking Trends & Innovations</div>
                                  <div>
                                    <li>Staying updated on the latest sports content trends: Short-form video, live discussions, and fan-generated content.</li>
                                    <li>Incorporating trending topics and fan-generated content to keep your content fresh and relevant.</li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Analytics and Data-Driven Strategy</div>
                                  <div>
                                    <li>Using analytics to track the performance of your content and refine strategies.</li>
                                    <li>Interpreting engagement metrics (likes, shares, comments) to improve content type, frequency, and targeting.</li>
                                  </div>
                                </div>
                                {/* <div className="row mb-3">
                                  <div className="fw-bold mb-16">Practical Activity (Take-Home Task)</div>
                                  <div>
                                    <li>At the end of Day 2:
                                      <ul>
                                        <li>Participants will be tasked with creating a sports content strategy for a hypothetical sports event.</li>
                                        <li>The task will involve developing:
                                          <ul>
                                            <li>Audience segmentation: Identifying key audience groups.</li>
                                            <li>Content tone and voice: Deciding the tone that aligns with the target audience and event.</li>
                                            <li>Platform-specific strategies: Choosing platforms and creating content types tailored to each.</li>
                                            <li>Content calendar: Planning out posts for one week based on the event.</li>
                                            <li>Engagement strategies: Identifying techniques for interaction (polls, Q&As, fan shoutouts).</li>
                                            <li>Analytics: Thinking about how they’d track and adjust their strategy post-launch.</li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="fw-bold mb-16">Task Submission</div>
                                  <div>
                                    <li>Participants will have 2-3 days to submit their content strategy in a PDF format to hello@athlerize.com with your name, registered email ID, and phone number in the email along with a short explanation for each component of the strategy and understanding.</li>
                                  </div>
                                </div> */}
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
                                <img src='/assets/images/kunal-s.png' className='career-img' />
                              </div>
                              <div className='teacher-info'>
                                <h5>By Kunal Samant </h5>
                                <p>Renowned Sports Content Creator and Storyteller

                                </p>
                              </div>
                            </div>
                            <div>
                              <p><strong>Kunal Samant</strong> is a renowned sports host and content creator with a remarkable career spanning over several years. He has been an integral part of high-profile sports teams and leagues, including:</p>
                              <ul>
                                <li>Mumbai Indians (Indian Premier League)</li>
                                <li>Hyderabad Black Hawks (Prime Volleyball League)</li>
                                <li>The Bharat Army (Official Team India Supporters Group)</li>
                                <li>Maharashtra Premier League</li>
                              </ul>
                              <p>With over 6-7 years of collaboration with <strong>The Bharat Army</strong>, Kunal has played a pivotal role in delivering highly engaging content for major sports events. Some of his key achievements include:</p>
                              <ul>
                                <li>Delivering the highest brand deliverables for the 2023 ICC World Cup through The Bharat Army.</li>
                                <li>Creating content for Star Sports through Bharat Army, hosting special episodes and engaging with fans at large.</li>
                              </ul>
                              <p>Kunal has also been involved in creating some of the most memorable and viral campaigns in sports content creation, such as:</p>
                              <ul>
                                <li>Harsha Bhogle Viral Kidnap Campaign - <a href="URL">URL</a></li>
                                <li>Riyan Parag Viral Interview on the World T20 - <a href="URL">URL</a></li>
                                <li>Legends League Cricket Coverage</li>
                                <li>Abu Dhabi T10 League Coverage</li>
                              </ul>
                              <p>His extensive experience in fan engagement, content creation, and live hosting makes him an expert in creating viral sports content. Through this workshop, Kunal aims to share his secrets behind these campaigns and equip participants with the tools and strategies to make their own mark in the world of sports content creation.</p>
                            </div>


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
                    <img src='/assets/images/card-img.png' className='w-100' />
                  </div>
                  <div className='course-enroll-info text-center'>
                    {/* <button className='enroll-btn mt-16' onClick={() => window.open('https://payments.cashfree.com/forms/testsppa', '_blank')}>Enroll Now</button> */}
                    <button className='enroll-btn mt-16' onClick={() => window.open('https://payments.cashfree.com/forms/kunalcourse1', '_blank')}>Enroll Now</button>
                    <h4 className='Black-text mt-24'>INR 1299 <span className='text-strike'>2499</span></h4>                    <p className='offer-text-clr p-0 m-0'>Special offer ends soon</p>
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