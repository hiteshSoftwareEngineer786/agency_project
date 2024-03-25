'use client'
import React from 'react'
import './Testimonial.scss';
import Image from 'next/image';
import StartIcon from '../../../public/images/star-icon.svg'
import TestimonialImage1 from '../../../public/images/testimonial-image-1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay , Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
const TestimonialContent = [
  {
    desc : "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts.",
    image : TestimonialImage1 ,
    name : "Alan Martí",
    designation : "Meta Inc."
  },
  {
    desc : "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
    image : TestimonialImage1 ,
    name : "Alan Martí",
    designation : "Meta Inc."
  },
  {
    desc : "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts.",
    image : TestimonialImage1 ,
    name : "Alan Martí",
    designation : "Meta Inc."
  }
]
const index = () => {
  return (
    <section className='testimonailSection pt100'>
      <div className='container'>
            <div className='title'>
              <span className='smallTitle'>Testimonials</span>
              <h2>What Our <br/> Clients Saying</h2>
            </div>
          </div>
          <div className='testimonialWrapper'>
            <Swiper
              // slidesPerView={6}
              loop={true}
              centeredSlides={true}
              centeredSlidesBounds={true}
                spaceBetween={0}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    575: {
                      slidesPerView: 1.5,
                      spaceBetween: 0 ,
                    },
                    // 768: {
                    //   slidesPerView: 1.5,
                    // },
                    // 1024: {
                    //   slidesPerView: 1.5,
                    // },
                  }}
                modules={[Autoplay, Pagination, Navigation]}
                className="TeamSwiper"
                
            >
                {
                    TestimonialContent.map((slide,i) => {
                        return(
                            <SwiperSlide>
                                <div className='testimonialSlide' key={i}>
                                  <div className='starsWrapper'>
                                    <Image src={StartIcon} alt='StartIcon' />
                                    <Image src={StartIcon} alt='StartIcon' />
                                    <Image src={StartIcon} alt='StartIcon' />
                                    <Image src={StartIcon} alt='StartIcon' />
                                    <Image src={StartIcon} alt='StartIcon' />
                                  </div>
                                  <p>{slide.desc}</p>
                                  <div className='customWrap'>
                                    <div className='imageBox'>
                                      <Image src={slide.image} alt='slider image' />
                                    </div> 
                                    <div className='ClientDetails'>
                                      <h4>{slide.name}</h4>
                                      <span>{slide.designation}</span>
                                    </div> 
                                  </div>
                                </div>
                            </SwiperSlide> 
                        )
                    })
                }
            </Swiper>
            
          </div>
      
    </section>
  )
}

export default index