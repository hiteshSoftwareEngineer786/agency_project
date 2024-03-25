'use client'
import React from 'react'
import "./Footer.scss";
import Image from 'next/image'
import Link from 'next/link'
import FooterLogo from '../../../public/images/footer-logo.svg' 
import { usePathname } from 'next/navigation'
const Footer = () => {
  const pathName = usePathname()
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footerTop'>
          <div className='footerWrapper'>
            <div className='footerCol'>
              <div className='footer-logo'>
                <Link href="/">
                  <Image src={FooterLogo} alt='FooterLogo'/>
                </Link>
              </div>
            </div>
            <div className='footerCol footerMenu'>
              <h5>Menu</h5>
              <ul className='footerLinksWrap'>
                <li className={ ` ${pathName == "/aboutus" ? 'active' : '' }`}>
                  <Link href="/aboutus">About</Link>
                </li>
                <li className={ `${pathName == '/services' ? 'active' : '' }`}>
                  <Link href="/services">Services</Link>
                </li>
                <li className={ `${pathName == '/blog' ? 'active' : '' }`}>
                  <Link href="/blog">Blog</Link>
                </li>
                <li className={ `${pathName == '/contactus' ? 'active' : '' }`}>
                  <Link href="/contactus">Contact</Link>
                </li>
              </ul>
            </div>
            <div className='footerCol footerMenu'>
              <h5>Service</h5>
              <ul className='footerLinksWrap'>
                <li>
                  <Link href="/">Design</Link>
                </li>
                <li>
                  <Link href="/">Development</Link>
                </li>
                <li>
                  <Link href="/">Marketing</Link>
                </li>
                <li>
                  <Link href="/">See More</Link>
                </li>
              </ul>
            </div>
            <div className='footerCol socialMedia'>
              <ul className='socialMediaWrapper'>
                <li>
                  <Link href='/' title='Facebook'>
                    <i className='icon-facebook' ></i>
                  </Link>
                </li>
                <li>
                  <Link href='/' title='Twitter'>
                  <i className='icon-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link href='/' title='Instagram'>
                  <i className='icon-instagram'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='copyRightFooter'>
          <p>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
          <div className='custom-row'>
            <Link href='/'>Terms of Use</Link>
            <Link href='/'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer