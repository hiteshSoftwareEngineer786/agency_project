'use client'
import React from 'react'
import './OurTeam.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay , Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import Image from 'next/image';
import TeamMemberImage1 from '../../../public/images/team-member-1.png'
import TeamMemberImage2 from '../../../public/images/team-member-2.png'
import TeamMemberImage3 from '../../../public/images/team-member-3.png'
import TeamMemberImage4 from '../../../public/images/team-member-4.png'

const ourTeamContent = [
    {
        image : TeamMemberImage1,
        name : 'Azah Anyeni',
        designation : 'Designer'
    },
    {
        image : TeamMemberImage2,
        name : 'Roelof Bekkenenks',
        designation : 'React Developer'
    },
    {
        image : TeamMemberImage3,
        name : 'Leonardo Oliveira',
        designation : 'Illustrator'
    },
    {
        image : TeamMemberImage4,
        name : 'Izabella Tabakova',
        designation : 'Product Designer'
    },
    {
        image : TeamMemberImage1,
        name : 'Azah Anyeni',
        designation : 'Designer'
    },
    {
        image : TeamMemberImage2,
        name : 'Roelof Bekkenenks',
        designation : 'React Developer'
    },
    {
        image : TeamMemberImage3,
        name : 'Leonardo Oliveira',
        designation : 'Illustrator'
    }
]
const index = () => {
  return (
    <section className='OurTeamSection pt100'>
        <div className='container'>
            <div className='OurTeamWrapper'>
            <div className='title pb60'>
                <span className='smallTitle'>Our Team</span>
                <h2>Team of Designers and Developers</h2>
            </div>
            <Swiper
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    575: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                modules={[Autoplay, Pagination, Navigation]}
                className="TeamSwiper"
                
            >
                {
                    ourTeamContent.map((slide,i) => {
                        return(
                            <SwiperSlide>
                                <div className='TeamMemberBox' key={i}>
                                    <div className='MemberImageBox'>
                                        <Image src={slide.image} alt='Team Member Image' />
                                    </div>
                                    <div className='MemberDetails'>
                                        <h4>{slide.name}</h4>
                                        <span>{slide.designation}</span>
                                    </div>
                                </div>
                            </SwiperSlide> 
                        )
                    })
                }
            </Swiper>
        </div>
        </div>
    </section>
  )
}

export default index