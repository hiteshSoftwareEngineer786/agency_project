import React from 'react'
import './OurContactBox.scss';
import Link from 'next/link';

const index = () => {
  return (
    <section className="ourContactSection pt80">
        <div className="container">
          <div className="ourDetailsWrapper">
            <div className="detailBox">
              <div className="customRow">
                <div className="iconBox">
                  <i className="icon-call-icon"></i>
                </div>
                <span>Phone</span>
              </div>
              <p>+1 (234) 567-89-00</p>
              <Link className="boxLink" href='/'></Link>
            </div>
            <div className="detailBox">
              <div className="customRow">
                <div className="iconBox">
                  <i className="icon-email-icon"></i>
                </div>
                <span>EMail</span>
              </div>
              <p>info@agency.com</p>
              <Link className="boxLink" href='/'></Link>
            </div>
            <div className="detailBox">
              <div className="customRow">
                <div className="iconBox">
                  <i className="icon-location-icon"></i>
                </div>
                <span>Address</span>  
              </div>
              <p>2247 Lunetta Street, TX 76301</p>
              <Link className="boxLink" href='/'></Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default index