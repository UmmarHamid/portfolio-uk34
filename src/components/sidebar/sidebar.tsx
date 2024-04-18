'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split('#')[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={`aside ${open ? 'open' : ''}`}>
      <div onClick={handleOpen} className='nav-toggler'>
        <span />
      </div>
      <div className='aside-inner'>
        <div className='logo'>
          <Link href='/' onClick={handleClose}>
            <Image
              src={'/imgs/logo-uk34.svg'}
              alt='logo'
              width={200}
              height={100}
            />
          </Link>
        </div>
        <ul className='nav'>
          <li onClick={handleClose}>
            <Link
              href='#home-section-anchor'
              data-to-scrollspy-id='home-section-anchor'
              onClick={(e) => onPress(e)}
            >
              <i className='fa fa-home' /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href='#red'
              // data-to-scrollspy-id='about-section-anchor'
              onClick={(e) => onPress(e)}
            >
              <span data-to-scrollspy-id='red'>
                <i className='fa fa-user' /> About
              </span>
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href='#services-section-anchor'
              data-to-scrollspy-id='services-section-anchor'
              onClick={(e) => onPress(e)}
              // className={`${pathUrl == '/services' && 'active'}`}
              // className='active-scroll-spy'
            >
              <i className='fa fa-list' /> Services
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href='#portfolio-section-anchor'
              data-to-scrollspy-id='portfolio-section-anchor'
              onClick={(e) => onPress(e)}
            >
              <i className='fa fa-briefcase' /> Portfolio
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href='#blog-section-anchor'
              data-to-scrollspy-id='blog-section-anchor'
              onClick={(e) => onPress(e)}
            >
              <i className='fa fa-envelope' /> Blog
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href='#contact-section-anchor'
              data-to-scrollspy-id='contact-section-anchor'
              onClick={(e) => onPress(e)}
            >
              <i className='fa fa-comments' /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
