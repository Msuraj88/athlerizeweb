'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
// import { useLocation } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { usePathname, useRouter } from 'next/navigation';
import '../globals.scss'

const Header = () => {
    // const navigate = useNavigate()
    const router = useRouter()
    const pathname = usePathname();
    console.log('cascascas', pathname)
    const menuRight: any = useRef(null);
    const [width, setWidth] = useState(null);
  const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDnlZ5kZe7dgk9RCzy1-csgiZ3GBIRDnBHxYx83zynjhv9Fg/viewform?embedded=true'
    const items = [
        {
            items: [
                {
                    label: 'Team',
                    command: () => router.push('/team')
                },
                {
                    label: 'Company',
                    command: () => router.push('/company')
                },
                {
                    label: 'Join Waitlist',
                    // command: () => window.open(waitlistUrl, '_blank')
                }
            ]
        }
    ];
    
    const startContent = (
        <div className='header-start' style={{background: pathname === '/' ? '#fff' : '#0f8fd3'}}>
            <p 
            className={pathname === '/partners' ? 'active' : ''} 
            onClick={() => router.push('/partners')}
            >Partners</p>
            <p 
            className={pathname === '/aboutus' ? 'active' : ''} 
            onClick={() => router.push('/aboutus')}
            >About Us</p>
            <p 
            className={pathname === '/contact' ? 'active' : ''} 
            onClick={() => router.push('/contact')}
            >Contact</p>
        </div>
    );

    const centerContent = (
        <div className="cursor-pointer" 
        onClick={() => router.push('/')}
        >
            <img src={`/assets/images/logo-${pathname === '/' || pathname === '/waitlist' ? 'blue' : 'white'}.svg`} width={'140px'} />
        </div>
    );

    // useEffect(() => {
    //     const handleResize = () => {
    //     setWidth(window?.innerWidth);
    //     };
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //     window.removeEventListener('resize', handleResize);
    //     };
    // }, []); 

    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-2">
            <Button label="View Courses" rounded className='joinlist-btn' />
            </div>
        </React.Fragment>
    );

    const endContent2 = (
        <React.Fragment>
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Button icon="pi pi-bars" className="mr-2" 
            // onClick={(event) => menuRight?.current.toggle(event)}
             aria-controls="popup_menu_right" aria-haspopup />
        </React.Fragment>
    )

    return (
        <div className="">
            <img src='/assets/images/adv.png' />
            <Toolbar start={centerContent} center={startContent} end={endContent} className={`topbar-container 
                  ${pathname === '/' || pathname === '/waitlist' ? 'bg-white' : 'bg-default'}
                 `} 
                />
            {/* <Toolbar start={width < 601 ?  '' : centerContent} center={width < 601 ? centerContent : startContent} end={width < 601 ? endContent2 : endContent} className={`topbar-container 
                  ${pathname === '/' || pathname === '/waitlist' ? 'bg-white' : 'bg-default'}
                 `} 
                /> */}
        </div>
    );
}

export default Header;

