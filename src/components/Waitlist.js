import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'

export const Waitlist = () => {
  const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [errors, setErrors] = useState({});
  const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDnlZ5kZe7dgk9RCzy1-csgiZ3GBIRDnBHxYx83zynjhv9Fg/viewform?embedded=true'

    const handleJoinWaitlist = () => {
      const newErrors = {};
      if (!name) newErrors.name = 'Name is required.';
      if (!city) newErrors.city = 'City and Country are required.';
      if (!email) {
          newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Email format is invalid.';
      }
      if (!contact) newErrors.contact = 'Contact number is required.';

      setErrors(newErrors);

      // If there are no errors, proceed with further logic (e.g., API call)
      if (Object.keys(newErrors).length === 0) {
          console.log('All inputs are valid. Proceeding with the waitlist submission.');
      }
  };
  return (
    <div className='home-container'>
      <p>Introducing</p>
      <h1>
        athleriZe
      </h1>
      <p>Be the first to experience the future of sports learning. <br /> Fill the details below and join the waitlist. </p>
      <div className='waitlist'>
      <div className="form-fields">
                <div>
                <InputText
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={errors.name ? 'p-invalid' : ''}
                />
                {errors.name && <small className="p-error">{errors.name}</small>}
                </div>
                
                <div>
                <InputText
                    placeholder="Your City, Country"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={errors.city ? 'p-invalid' : ''}
                />
                {errors.city && <small className="p-error">{errors.city}</small>}
                </div>
            </div>
            <div className="form-fields">
                <div>
                <InputText
                    placeholder="Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? 'p-invalid' : ''}
                />
                {errors.email && <small className="p-error">{errors.email}</small>}
                </div>
                
                <div>
                <InputText
                    placeholder="Your Contact Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className={errors.contact ? 'p-invalid' : ''}
                />
                {errors.contact && <small className="p-error">{errors.contact}</small>}
                </div>
            </div>
            <Button label="Join Waitlist" rounded  onClick={() => window.open(waitlistUrl, '_blank')} />

              </div>
    </div>
  )
}
