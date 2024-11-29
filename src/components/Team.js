import { Button } from 'primereact/button';
import { TabPanel, TabView } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import React from 'react';

const Team = () => {
  const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDnlZ5kZe7dgk9RCzy1-csgiZ3GBIRDnBHxYx83zynjhv9Fg/viewform?embedded=true'
  return (
    <div className='team-container'>
      <div className='banner'>
        <Button label="Our Squad" outlined />
        <p>
          athleriZe is a team sport
        </p>
      </div>
      <div className='team-block'>
        <TabView>
          <TabPanel header="The Founders">
            {/* <div> */}
              <div className='profiles'>
                <img src='/assets/images/anil.png' alt='anil' />
                <div className='profile-details'>
                  <h3>Mr A</h3>
                  <h5>Founder</h5>
                  <p>
                    Our powerhouse of inspiration and enthusiasm, Anil leads athleriZe with his excellence, charm and weird sense of humour.
                  </p>
                  <p>
                    An entrepreneur and digital nomad, with a confused engineering degree, experienced at events, IT, and more to satisfy his creative cravings towards problem-solving and a life of detail when he stumbled upon love of sports. A self-taught UX and Product person, at a reasonably young age. A quick learner, party hopper and sports enthusiast, you will find him raging about sports for the rest of the year.
                  </p>
                  <p>
                    Anil holds an under graduate degree from JNTU, Hyderabad, India.
                  </p>
                </div>
              </div>
              <div className='profiles'>
                <img src='/assets/images/sai.png' alt='anil' />
                <div className='profile-details'>
                  <h3>Sai Praneeth B</h3>
                  <h5>Founding Partner</h5>
                  
                  <p>
                  A champion sportsperson and one of the greatest and most successful badminton athletes in India. Sai Praneeth's name is etched in record books as the first Indian male shuttler in 36 years to win a bronze medal in the BWF World Championships in 2019. His stunning wins against the all-time greats -- Muhammad Hafiz Hashim, Taufik Hidayat, Hu Yun, Lee Chong Wei in International circuit, bore testament to his mental strength and his rock-solid technique.
                  </p>
                  <p>
                  Sai Praneeth serves as our Brand Ambassador and a Strategist; works closely with the Founder, together to improve, strengthen and scale the growth of athleriZe. 
                  </p>
                </div>
              </div>
              {/* </div> */}
              <div className='waitlist'>
                <p>Join our early access waitlist</p>
                <div className="inp-grp flex-1">
                <InputText placeholder="name@domain.com" />
                <Button label="Join Waitlist" rounded  onClick={() => window.open(waitlistUrl, '_blank')} />
            </div>

              </div>
          </TabPanel>
          <TabPanel header="Our Squad">
            <p className='coming-soon'>Coming soon...</p>
          </TabPanel>
          <TabPanel header="Advisory Board">
            <p className='coming-soon'>Coming soon...</p>
          </TabPanel>
        </TabView>
      </div>
    </div>
  )
}

export default Team