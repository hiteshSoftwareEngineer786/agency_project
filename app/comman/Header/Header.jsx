'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import "./Header.scss";
import SiteLogo from '../../../public/images/agency-logo.svg' 
import Image from 'next/image';
import { usePathname } from 'next/navigation'
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        document.body.classList.toggle("menuOpen", !isMenuOpen);
      };
  const pathName = usePathname()
 const  NavMenuContent = [
    {
      title : "About",
      link :  "/aboutus",
      activePath: '/aboutus'
    },
    {
      title : "Services",
      link :  "/services",
      activePath: '/services'
    },
    {
      title : "Pricing",
      link :  "/pricing",
      activePath: '/pricing'
    },
    {
      title : "Blog",
      link :  "/blog",
      activePath: '/blog'
    }
  ]
  return (
    <>
    <header className='header'>
    <div className='container'>
      <div className='headerWrapper'>
        <div className='logo'>
          <Link href="/">
            <Image src={SiteLogo} alt="rigvedIT"/> 
          </Link>
        </div>
        <nav className='headerNavMenu'>
        
          <div className={` navMenuWrapper ${
                            isMenuOpen ? ' menuOpen' : ''
                        }`}>
            <ul>        
                {NavMenuContent.map((item,index) => {
                  return(
                    <>
                      <li key={index} className={ `NavMenu ${pathName == item?.activePath ? 'active' : '' }`}>
                        <Link 
                         href={item.link}
                         title={item.title}
                         className='Navlink'>
                          {item.title}
                        </Link>             
                      </li>
                    </>
                  )
                })}
                
            </ul>
            </div>
            <Link href={'/contactus'} className='contactBtn commonBtn' title='Contact Us'>
                Contact Us
            </Link>
            <button
              className='toggleMenuwrap'
              onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
        </nav>
      </div>
    </div>
    </header>
    
    </>
  )
}

export default Header