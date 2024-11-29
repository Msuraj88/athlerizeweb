
import React, { useEffect, useRef, useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'primereact/menu';

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const menuRight = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
  const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDnlZ5kZe7dgk9RCzy1-csgiZ3GBIRDnBHxYx83zynjhv9Fg/viewform?embedded=true'
    const items = [
        {
            items: [
                {
                    label: 'Team',
                    command: () => navigate('/team')
                },
                {
                    label: 'Company',
                    command: () => navigate('/company')
                },
                {
                    label: 'Join Waitlist',
                    command: () => window.open(waitlistUrl, '_blank')
                }
            ]
        }
    ];
    
    const startContent = (
        <div className='header-start'>
            <p className={location.pathname === '/team' ? 'active' : ''} onClick={() => navigate('/team')}>Partners</p>
            <p className={location.pathname === '/company' ? 'active' : ''} onClick={() => navigate('/company')}>About Us</p>
            <p className={location.pathname === '/company' ? 'active' : ''} onClick={() => navigate('/company')}>Contact</p>
        </div>
    );

    const centerContent = (
        <div className="cursor-pointer" onClick={() => navigate('/')}>
            <img src={`/assets/images/logo-${location.pathname === '/' || location.pathname === '/waitlist' ? 'blue' : 'white'}.svg`} width={'140px'} />
        </div>
    );

    useEffect(() => {
        const handleResize = () => {
        setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []); 

    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-2">
            <Button label="Join Waitlist" onClick={() => window.open(waitlistUrl, '_blank')} rounded className='joinlist-btn' />
            </div>
        </React.Fragment>
    );

    const endContent2 = (
        <React.Fragment>
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Button icon="pi pi-bars" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        </React.Fragment>
    )

    return (
        <div className="card">
            <img src='/assets/images/adv.png' />
            <Toolbar start={width < 601 ?  '' : centerContent} center={width < 601 ? centerContent : startContent} end={width < 601 ? endContent2 : endContent} className={`topbar-container ${location.pathname === '/' || location.pathname === '/waitlist' ? 'bg-white' : 'bg-default'}`} />
        </div>
    );
}

export default Header;