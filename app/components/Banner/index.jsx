import React from 'react'
import "./Banner.scss";
const Banner = ({title="", desciption=""}) => {
  return (
    <section className='bannerSection'>
      <div className='container'>
        <div className='bannerContent'>
          <h1>{title}</h1>
          <p>{desciption}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner