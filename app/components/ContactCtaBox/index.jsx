import React from 'react'
// import Button from '../Button'
import './ContactCtaBox.scss';
import Link from 'next/link'
import Image from 'next/image'
import CtaImage from "../../../public/images/contact-cta-image.png"
const ContactCtaBox = ({extraClass}) => {   
  return (
    <section className={`contactCtaBoxSection mt100 ${extraClass ? extraClass : ' '}`}> 
        <div className='container'>
            <div className='ctaBox'>
                <div className='ctaContent'>
                    <h2>Help To Build Your Dream Project</h2>
                    <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <Link href='/contactus' className='commonBtn'>Contact Now</Link>
                </div>
                <div className='ctaimageBox'>
                    <Image src={CtaImage} alt='CtaImage'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactCtaBox