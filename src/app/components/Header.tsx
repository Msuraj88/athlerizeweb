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
    // let wwidth = window?.innerWidth
    // if(type)
    const router = useRouter()
    const pathname = usePathname();
    const menuRight: any = useRef(null);
    const [width, setWidth] = useState<any>(601);
  const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDnlZ5kZe7dgk9RCzy1-csgiZ3GBIRDnBHxYx83zynjhv9Fg/viewform?embedded=true'
    const items = [
                {
                    label: 'Partners',
                    command: () => router.push('/partners')
                },
                {
                    label: 'About Us',
                    command: () => router.push('/aboutus')
                },
                {
                    label: 'Contact',
                    command: () => router.push('/contact')
                }
    ];
    
    const startContent = (
        <div className='header-start' style={{background: pathname === '/' || pathname === '/aboutus' || pathname === '/contact' || pathname === '/privacy-policy' || pathname === '/terms' || pathname === '/refund' || pathname === '/checkout' ? '#fff' : '#0f8fd3'}}>
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
            <img src={`/assets/images/logo-${pathname === '/' || pathname === '/waitlist' || pathname === '/aboutus' || pathname === '/contact' || pathname === '/privacy-policy' || pathname === '/terms' || pathname === '/refund' || pathname === '/checkout' ? 'blue' : 'white'}.svg`} width={'140px'} />
        </div>
    );

    useEffect(() => {
        if(typeof window == 'undefined') {
            return;
        }
        setWidth(window?.innerWidth)
    }, [])

    useEffect(() => {
        const handleResize = () => {
        setWidth(window?.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []); 

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
            onClick={(event) => menuRight?.current.toggle(event)}
             aria-controls="popup_menu_right" aria-haspopup />
        </React.Fragment>
    )
    console.log('ascasca', width)
    return (
        <div className="">
            <img src='/assets/images/adv.png' width={'100%'} />
            {/* <Toolbar start={centerContent} center={startContent} end={endContent} className={`topbar-container 
                  ${pathname === '/' || pathname === '/waitlist'|| pathname === '/aboutus' || pathname === '/contact' || pathname === '/privacy-policy' || pathname === '/terms' || pathname === '/refund' || pathname === '/checkout'  ? 'bg-white' : 'bg-default'}
                 `} 
                /> */}
            <Toolbar start={width < 601 ?  '' : centerContent} center={width < 601 ? centerContent : startContent} end={width < 601 ? endContent2 : endContent} className={`topbar-container 
                  ${pathname === '/' || pathname === '/waitlist'|| pathname === '/aboutus' || pathname === '/contact' || pathname === '/privacy-policy' || pathname === '/terms' || pathname === '/refund' || pathname === '/checkout'  ? 'bg-whitee' : 'bg-default'}
                 `}
                />
        </div>
    );
}

export default Header;

