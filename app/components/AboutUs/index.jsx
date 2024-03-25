'use client';
import React from 'react'
import './AboutUs.scss';

const AboutUs = ({smallTitle="",title="",description1="",description2=""}) => {
  return (
    <section className='aboutUsSection pt80 pb80'>
        <div className='container'>
            <div className='AboutUsWrapper'>
                <div className='AboutLeftContent'>
                <span className='smallTitle'>{smallTitle}</span>
                <h3>{title}</h3>
                </div>
                <div className='AboutRighttContent'>
                    <p>{description1}</p>
                    <p>{description2}</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default AboutUs