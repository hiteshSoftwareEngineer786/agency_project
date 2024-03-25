import React from 'react'
import "./Portfolio.scss";
import Image from 'next/image';
import PortfolioImage1 from "../../../public/images/portfolio-image-1.png";
import PortfolioImage2 from "../../../public/images/portfolio-image-2.png";
import PortfolioImage3 from "../../../public/images/portfolio-image-3.png";
import PortfolioImage4 from "../../../public/images/portfolio-image-4.png";
import Link from 'next/link';

// const PortfolioContent = [
//     { title: 'Show All', content: <div>Content for Tab 1</div> },
// ]
const index = () => {
  return (
    <section className="portfolioSection pt100">
        <div className="container">
            <div className="title">
                <span className="smallTitle">Portfolio</span>
                <h2>Latest Work</h2>
            </div>
            <div className='PorfolioWrapper'>
            <ul className='tabListWrapper'>
                <li className='active'>Show All <sup>14</sup></li>
                <li>Design<sup>6</sup></li>
                <li>Branding <sup>4</sup></li>
                <li>Illustration <sup>3</sup></li>
                <li>Motion<sup>1</sup></li>
            </ul>
            <div className='TabContentWrapper'>
                <div className='ImageBox'>
                  <Image src={PortfolioImage1}  alt='PortfolioImage' />  
                  <div className='content'>
                    <span className='badge'>Design</span>
                    <h3>SOFA</h3>
                  </div>
                </div>
                <div className='ImageBox'>
                  <Image src={PortfolioImage2}  alt='PortfolioImage' />  
                  <div className='content'>
                    <span className='badge'>Branding</span>
                    <h3>KeyBoard</h3>
                  </div>
                </div>
                <div className='ImageBox'>
                  <Image src={PortfolioImage3}  alt='PortfolioImage' />  
                  <div className='content'>
                    <span className='badge'>Illustration</span>
                    <h3>Work Media</h3>
                  </div>
                </div>
                <div className='ImageBox'>
                  <Image src={PortfolioImage4}  alt='PortfolioImage' />  
                  <div className='content'>
                    <span className='badge'>Motion</span>
                    <h3>DDDone</h3>
                  </div>
                </div>
            </div>
            <div className='ButtonBox'>
                <Link href="/" className='commonBtn borderBtn'>Explore More</Link>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default index