import { Button } from 'primereact/button';
import { Chip} from 'primereact/chip';
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext';

const Company = () => {
  const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDnlZ5kZe7dgk9RCzy1-csgiZ3GBIRDnBHxYx83zynjhv9Fg/viewform?embedded=true'
  return (
    <div className='team-container'>
      <div className='company-banner'>
        <Button label="About Us" outlined />
        <p>
          At athleriZe, we are creating a world where sports learning is accessible, engaging, and empowering for everyone.
        </p>
      </div>
      <div className='about-company'>
        <div className='first-block'>
          <div>
            <p>
            athleriZe is an e-learning platform dedicated to sports and all the diverse areas that surround it. We’re on a mission to make sports education accessible to athletes, enthusiasts, and professionals alike, bridging the gap between knowledge and passion. Whether it’s honing your skills, exploring new disciplines, or gaining insights into the sports industry, <b>athleriZe is here to fuel your passion and drive your progress.</b>
            </p>
            <p>
            Our platform is designed to be a community-driven space where you can learn from the best in the industry, connect with like-minded individuals, and take steps towards achieving your dreams in sports and beyond. We envision a future where learning sports-related skills is as effortless and enjoyable as playing the game itself.
            </p>
          </div>
          <img src='/assets/images/company-logo.svg' alt='' width={'15%'} />
        </div>
        <hr className='hr-line' />
      <div className='learn-details'>
        <h1>Learn. Grow. Excel.</h1>
        <div className='chips-container'>
        
          <div className='chips-block'>
            <Chip label="Journalism" />
            <Chip label="Sports Commentary" />
            <Chip label="Fitness" />
            <Chip label="Sports Analytics" />
            <Chip label="Sports Photography" />
            <Chip label="Marketing" />
            <Chip label="Psychology" />
            <Chip label="Sports Content Writing" />
            <Chip label="Design" />
          </div>
          <div style={{width: '50%'}}>
            <img src='/assets/images/company-logo-blue.svg' alt='' width={'100%'} />
          </div>
          <div className='chips-block'>
            <Chip label="Event Management" />
            <Chip label="Health & Fitness" />
            <Chip label="Design" />
            <Chip label="Social Media for Sports" />
            <Chip label="Sports Entrepreneurship" />
            <Chip label="Sports Mastery" />
            <Chip label="Game Strategy & Tactics" />
            <Chip label="Sports Law" />
          </div>
        </div>
      </div>
      <div className='cards-details'>
      <Card title="">
          <p className="m-0">
          Get insights from top athletes, coaches, and experts with real-world experience.
          </p>
          <h5>Learn from the Best</h5>
      </Card>
      <Card title="">
          <p className="m-0">
          Courses for all levels, from beginners to aspiring professionals.
          </p>
          <h5>Structured Learning</h5>
      </Card>
      <Card title="">
          <p className="m-0">
          Online learning, self-paced courses, and live sessions on your terms.
          </p>
          <h5>Flexible Access</h5>
      </Card>
      </div>
      <hr className='hr-line' />
      <div className='waitlist'>
                <p>Join our early access waitlist</p>
                <div className="inp-grp flex-1">
                <InputText placeholder="name@domain.com" />
                <Button label="Join Waitlist" rounded onClick={() => window.open(waitlistUrl, '_blank')} />
            </div>

              </div>
      </div>
      </div>
  )
}

export default Company