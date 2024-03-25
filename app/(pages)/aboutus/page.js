import React from 'react'
import './page.scss';
import AboutUs from '@/app/components/AboutUs'
import Banner from '@/app/components/Banner'
import Features from '@/app/components/Features'
import CounterBox from '@/app/components/CounterBox'
import Testimonial from '@/app/components/Testimonial'
import OurClients from '@/app/components/OurClients'
import OurTeam from '@/app/components/OurTeam'
import slideImage1 from '../../../public/images/about-slide-img1.png'
import slideImage2 from '../../../public/images/about-slide-img2.png'
import slideImage3 from '../../../public/images/about-slide-img3.png'
import slideImage4 from '../../../public/images/about-slide-img4.png'
// import VideoThumbnail from '../../../public/images/video-thumbnail.png'
import Image from 'next/image'
import FAQ from '@/app/components/FAQ';
import ContactCtaBox from '@/app/components/ContactCtaBox';
const page = () => {
  return (
    <main>
      <Banner title='About Us' desciption='Agency provides a full service range including technical skills, design, business understanding.'/>  
      <AboutUs smallTitle = 'About'
        title = "An Experience Design Agency"
        description1 = "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        description2 = "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
       />
       <section className='aboutSlideSection'>
        <div className='container'>
          <div className='SliderImageWrapper'>
            <div className='videoBox'>
              <video width="100%" height="100%" poster="/images/video-thumbnail.png" controls>
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.ogg" type="video/ogg" />
                  <source src="video.webm" type="video/webm" />
                  <object data="video.mp4" width="100%" height="100%">
                  <embed src="video.swf" width="100%" height="100%" />
                  </object>
              </video>
            <div className='playBtn'>
              <i className='icon-triangle'></i>
            </div>
            </div>
            <div className='aboutImageBox'>
              <div className='boxImage'>
                <Image src={slideImage1} alt='slide image'/>
              </div>
              <div className='boxImage'>
                <Image src={slideImage2} alt='slide image'/>
              </div>
              <div className='boxImage'>
                <Image src={slideImage3} alt='slide image'/>
              </div>
              <div className='boxImage'>
                <Image src={slideImage4} alt='slide image'/>
              </div>
            </div>
          </div>
        </div>
       </section>
       <Features caption="Features" title="Long run, and work as an extension of the merchant's team."
       description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension."
       linkTitle="Read More"
       />
       <CounterBox />
       <div className='darkBg mt100 mb100'>
        <OurTeam />
        <Testimonial />
        <FAQ  extraClass="AboutusFaq" />
        <OurClients />
        <ContactCtaBox extraClass="AboutusCta" />
       </div>
    </main>
  )
}

export default page