import React from 'react'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <p>copyright © whatsinthegame sports & media pvt ltd</p>
        <div>
        <i className="pi pi-instagram" style={{ color: 'white', fontSize: '1rem', background: 'black', padding: '4px' }} onClick={() => window.open('https://www.instagram.com/athlerize/', '_blank')}></i>
        <i className="pi pi-linkedin" style={{ color: 'black', fontSize: '1.5rem' }} onClick={() => window.open('https://www.linkedin.com/company/athlerize/', '_blank')}></i>
        <i className="pi pi-facebook" style={{ color: 'white', fontSize: '1rem', background: 'black', padding: '4px'  }} onClick={() => window.open('https://www.facebook.com/athlerize', '_blank')}></i>
        <i className="pi pi-twitter" style={{ color: 'white', fontSize: '1rem', background: 'black', padding: '4px'  }} onClick={() => window.open('https://x.com/athlerize', '_blank')}></i>
        <i className="pi pi-youtube" style={{ color: 'white', fontSize: '1rem', background: 'black', padding: '4px'  }}></i>
        </div>
    </div>
  )
}
