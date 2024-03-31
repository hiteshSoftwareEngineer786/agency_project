import React from "react";
import "./page.scss";
import Image from "next/image";
import Link from "next/link";

import BannerImage from "../../../public/images/home-banner.png";
import UserImage from "../../../public/images/user-image.png";
import BannerStar from "../../../public/images/banner-star-icon.svg";
import blogImage1 from "../../../public/images/recent-blog-image-1.png";
import blogImage2 from "../../../public/images/recent-blog-image-2.png";
import GirlUserImage from "../../../public/images/user-image-2.png";
import homeAboutusImage from "../../../public/images/home-aboutus-image.png";
import homeServicesImage from "../../../public/images/home-services-image.png";
import GetStartedImage from "../../../public/images/get-started-img.png";
import GirlImage from "../../../public/images/girl-image.png";
import GiftIcon from "../../../public/images/gifticon.png";
import HomeFeaturesImage from "../../../public/images/home-features-image.png";
import AwardsImage from "../../../public/images/awards-image.png";
import AwardsImage2 from "../../../public/images/award-img-2.png";
import StartIcon from '../../../public/images/star-icon.svg'
import TestimonialImage1 from '../../../public/images/testimonial-image-1.png'
import FounderImage from '../../../public/images/founder-image.png'
import OurClients from "@/app/components/OurClients";
import CounterBox from "@/app/components/CounterBox";
import OurContactBox from "@/app/components/OurContactBox";
import WhoWeAre from "@/app/components/WhoWeAre";
import Features from "@/app/components/Features";
import Portfolio from "@/app/components/Portfolio";
import OurTeam from "@/app/components/OurTeam";
import ContactForm from "@/app/components/ContactForm";
import FAQ from "@/app/components/FAQ";
import Pricing from "@/app/components/Pricing";
import NewsLetter from "@/app/components/NewsLetter";
import Blog from "@/app/components/Blog";
import ContactCtaBox from "@/app/components/ContactCtaBox";

const HomeClientsContent = [
  "/images/home-client-img1.png",
  "/images/home-client-img2.png",
  "/images/home-client-img3.png",
  "/images/home-client-img4.png",
  "/images/home-client-img5.png",
];

const allBlogsContent = [
  {
    image: blogImage1,
    blogBadge: "Stories",
    title: "Performance marketing agencies specialize",
    date: "7 Dec, 2021",
  },
  {
    image: blogImage2,
    blogBadge: "Design",
    title: "Digital marketing channels",
    date: "23 Nov, 2021",
  },
  {
    image: blogImage1,
    blogBadge: "Stories",
    title: "Performance marketing agencies specialize",
    date: "7 Dec, 2021",
  },
];

const TestimonialContent = [
  {
    desc : "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts.",
    image : TestimonialImage1 ,
    name : "Alan Martí",
    designation : "Meta Inc."
  },
  {
    desc : "Provide your business with a variety of digital solutions to promote your product or service online.",
    image : TestimonialImage1 ,
    name : "Richardo Kann",
    designation : "Photogram"
  },
  {
    desc : "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
    image : TestimonialImage1 ,
    name : "Graham Griffiths",
    designation : "Twitor"
  },
  {
    desc : "Promote your product or service online and help you hit your marketing goals and grow your business.",
    image : TestimonialImage1 ,
    name : "Maria Trofimova",
    designation : "Whochat"
  }
]
export default function Page() {
  return (
    <>
      <main className="homePage">
        <section className="homeBannerSection">
          <div className="container">
            <div className="homeBannerWrapper">
              <div className="bannerContent">
                <div className="content">
                  <span className="title-caption">Modern Studio</span>
                  <h1>
                    We’re Help <br /> To Build Your Dream Project
                    <Image
                      src={BannerStar}
                      alt="BannerStar"
                      className="BannerStarImage"
                    />
                  </h1>
                  <p className="description">
                    Agency provides a full service range including technical
                    skills, design, business understanding.
                  </p>
                  <div className="buttonWrapper">
                    <Link href="/" className="commonBtn orangeBtn">
                      How We Work
                    </Link>
                    <Link href="/" className="contactLink">
                      Contact Us
                    </Link>
                  </div>
                  <div className="reviewBox">
                    <div className="userIcon">
                      <Image
                        src={UserImage}
                        alt="UserImage"
                        className="UserImage"
                      />
                    </div>
                    <div className="userContent">
                      <p>"Put themselves in the merchant's shoes"</p>
                      <span className="userName">Meta Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bannerImage">
                <Image src={BannerImage} alt="BannerImage" />
              </div>
            </div>
          </div>
        </section>
        <OurClients
          extraClass="homeClients"
          ClientsContent={HomeClientsContent}
        />
        <section className="HomeAboutusSection pt100">
          <div className="container">
            <div className="HomeAboutusWrapper">
              <div className="AboutImgBox">
                <Image src={homeAboutusImage} alt="homeAboutusImage" />
              </div>
              <div className="AboutUsContent">
                <div className="innercontent">
                  <span className="smallTitle">About</span>
                  <h2>An Experience Design Agency</h2>
                  <h5>Provides a full service range</h5>
                  <p>
                    Ability to put themselves in the merchant's shoes. It is
                    meant to partner on the long run, and work as an extension
                    of the merchant's team.
                  </p>
                  <Link href="/aboutus" className="commonBtn">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CounterBox />
        <WhoWeAre extraClass="homeWhoWeAre " homeContent />

        <section className="videoreelSection pt100">
          <div className="container">
            <div className="HomeAboutusWrapper">
              <div className="videoBox">
                <video
                  width="100%"
                  height="100%"
                  poster="/images/video-thumbnail.png"
                  controls
                >
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.ogg" type="video/ogg" />
                  <source src="video.webm" type="video/webm" />
                  <object data="video.mp4" width="100%" height="100%">
                    <embed src="video.swf" width="100%" height="100%" />
                  </object>
                </video>
                <div className="playBtn">
                  <i className="icon-triangle"></i>
                </div>
              </div>
              <div className="AboutUsContent">
                <div className="innercontent">
                  <span className="smallTitle">Video Reel</span>
                  <h2>Unlock The Greatest Value Possible</h2>
                  <p>
                    Design, business understanding, ability to put themselves in
                    the merchant's shoes meant to partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="homeFeaturesSection pt100">
          <div className="container">
            <div className="homeFeaturesWrapper">
              <div className="FeatureContent">
                <div className="innercontent">
                  <span className="smallTitle">Features</span>
                  <h2>Give Your Site A New Look</h2>
                  <p>
                    Service range including technical skills, design, business
                    understanding.
                  </p>
                  <ul class="contentList">
                    <li>
                      <i class="icon-true-icon"></i>
                      <span>Range including technical skills</span>
                    </li>
                    <li>
                      <i class="icon-true-icon"></i>
                      <span>Business understanding</span>
                    </li>
                    <li>
                      <i class="icon-true-icon"></i>
                      <span>Partner on the long run</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="HomeImagBox">
                <Image src={HomeFeaturesImage} alt="Features image" />
              </div>
            </div>
          </div>
        </section>
        <Features
          caption="Features"
          title="asLong run, and work as an extension of the merchant's team."
          description=""
          linkTitle="Read More"
        />

        <section className="HomeAboutusSection pt100">
          <div className="container">
            <div className="HomeAboutusWrapper">
              <div className="AboutImgBox">
                <Image src={homeServicesImage} alt="homeServicesImage" />
              </div>
              <div className="AboutUsContent">
                <div className="innercontent">
                  <span className="smallTitle">Service</span>
                  <h2>Making Complex Digital Products</h2>
                  <h5>
                    Agency provides a full service range including technical
                    skills, design, business.
                  </h5>
                  <div className="userReviewBox">
                    <div className="iconBox">
                      <Image src={GirlUserImage} alt="GirlUserImage" />
                    </div>
                    <div className="content">
                      <p className="desc">
                        "Understanding, ability to put themselves in the
                        merchant's shoes. It is meant to partner."
                      </p>
                      <span className="name">Jenny Murtaugh</span>
                    </div>
                  </div>
                  <Link href="/aboutus" className="commonBtn">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="HomeServiceSection pt100">
          <div className="container">
          <div className="ourDetailsWrapper">
            <div className="detailBox">
              <div className="iconBox">
                <i className="icon-desgin-icon"></i>
              </div>
              <h4>Design</h4>
              <p>Agency provides a full service range including technical skills, design.</p>
              <Link href='/' className="link">Learn More</Link>
            </div>
            <div className="detailBox">
              <div className="iconBox">
                <i className="icon-development-icon"></i>
              </div>
              <h4>Development</h4>
              <p>Full service range including technical skills, design, business.</p>
              <Link href='/' className="link">Discover More</Link>
            </div>
            <div className="detailBox">
              <div className="iconBox">
                <i className="icon-marketing"></i>
              </div>
              <h4>Marketing</h4>
              <p>Technical skills, design, business understanding, ability.</p>
              <Link href='/' className="link">Explore Now</Link>
            </div>
          </div>
          </div>
        </section>

        <div className="darkBg mt100 pb100">
          <Portfolio />
          <section className="getStartedBoxSection pt100">
            <div className="container">
              <div className="getstartedBox">
                  <div className="content">
                    <span className="smallTitle">Get Started</span>
                    <h4>We Help Companies Move Faster</h4>
                    <Link href="/contactus" className="commonBtn orangeBtn">Contact Us</Link>
                  </div>
                  <div className="ImageBox">
                    <Image src={GetStartedImage}  alt="girl image" />
                  </div>
                  <div className="girlImageBox">
                    <Image src={GirlImage}  alt="girl image"  className="getStartIMage" />
                  </div>
                  <Image src={GiftIcon}  alt="girl image"  className="GiftIcon" />
              </div>
            </div>
          </section>
          <section className="HomeEventsSection pt100">
            <div className="container">
              <div className="title">
                <span className="smallTitle">Events</span>
                <h2>Explore Future <br/>Conferences</h2>
              </div>
              <div className="EventsWrapper">
                <div className="EventBox">
                    <div className="EventSchedule">
                      <div className="date">
                        <span className="num">3</span>
                        <h4>November <br/> 2021</h4>
                      </div>
                      <div className="time">
                        <i className="icon-clock-icon"></i>
                        <p>9:00 am – 3:00 pm</p>
                      </div>
                    </div>
                    <div className="EventDetails">
                      <h4>Design Weeks</h4>
                      <p>Digital agency is a business you hire to outsource your digital.</p>
                      <Link href="/" className="link" >Explore Now</Link>
                    </div>
                </div>
                <div className="EventBox">
                    <div className="EventSchedule">
                      <div className="date">
                        <span className="num">15</span>
                        <h4>November <br/> 2021</h4>
                      </div>
                      <div className="time">
                        <i className="icon-clock-icon"></i>
                        <p>1:00 pm – 8:00 pm</p>
                      </div>
                    </div>
                    <div className="EventDetails">
                      <h4>Interior Design</h4>
                      <p>Marketing efforts, instead of handling in-house.</p>
                      <Link href="/" className="link" >Explore Now</Link>
                    </div>
                </div>
                <div className="EventBox">
                    <div className="EventSchedule">
                      <div className="date">
                        <span className="num">2</span>
                        <h4>November <br/> 2021</h4>
                      </div>
                      <div className="time">
                        <i className="icon-clock-icon"></i>
                        <p>10:00 am – 2:00 pm</p>
                      </div>
                    </div>
                    <div className="EventDetails">
                      <h4>The F design events</h4>
                      <p>Provide your business with a variety of digital solutions to promote.</p>
                      <Link href="/" className="link" >Explore Now</Link>
                    </div>
                </div>
              </div>
              <div className="buttonBox">
                <Link href="/" className="borderBtn commonBtn">Explore More</Link>
              </div>
            </div>
          </section>
          <OurTeam />
          <section className="FoundersWordSection pt100">
            <div className="container">
            <div className="FoundersWordWrapper">
              <div className="FoundersimageBox">
                <Image src={FounderImage} alt="FounderImage" />
              </div>
              <div className="FoundersContent">
                <div className="innercontent">
                  <span className="smallTitle">Founder Words</span>
                  <h3>
                  Digital agency is a business you hire to outsource your digital marketing efforts
                  <i className="icon-quotes-icon"></i>
                  </h3>
                    <h5>Ren Delan</h5>
                    <span className="designation">Founder</span>
                </div>
              </div>
            </div>
            </div>
          </section>
        </div>

        <section className="HomeTestimonialSection pt100">
          <div className="container">
            <div className="title">
              <span className="smallTitle">Testimonials</span>
              <h2>What Our <br/> Clients Saying</h2>
            </div>
            <div className="HomeTestimonialWrapper">
              {
                TestimonialContent.map((client,i) => {
                  return(
                    <div className="clinetReview" key={i}>
                    <div className='starsWrapper'>
                      <Image src={StartIcon} alt='StartIcon' />
                      <Image src={StartIcon} alt='StartIcon' />
                      <Image src={StartIcon} alt='StartIcon' />
                      <Image src={StartIcon} alt='StartIcon' />
                      <Image src={StartIcon} alt='StartIcon' />
                    </div>
                    <p>{client.desc}</p>
                    <div className='customWrap'>
                      <div className='imageBox'>
                        <Image src={client.image} alt='client image' />
                      </div> 
                      <div className='ClientDetails'>
                        <h4>{client.name}</h4>
                        <span>{client.designation}</span>
                      </div> 
                    </div>
                  </div>
                  )
                })
              }
              
            </div>
            <div className="seeAllBtn">
              <Link href="/aboutus" className="commonBtn">See All</Link>
            </div>
          </div>
        </section>
        <Pricing />
        <FAQ />
        <section className="awardsSection pt100">
          <div className="container">
            <div className="title">
              <h2>Our Awards</h2>
            </div>
            <div className="awardsWrapper">
              <div className="CustomRow">
              <div className="wrap">
                <div className="imageBox">
                  <Image src={AwardsImage} alt="AwardsImage" />
                </div>
                <h5>SOFA</h5>
              </div>
              <span>25 Oct, 2021</span>
            
              <div className="wrap">
                <p>Awwwards</p>
                <div className="AwardImageBox">
                  <Image src={AwardsImage2} alt="AwardsImage2" />
                </div>
              </div>
              </div>
              <div className="CustomRow">
              <div className="wrap">
                <div className="imageBox">
                  <Image src={AwardsImage} alt="AwardsImage" />
                </div>
                <h5>KeyBoard</h5>
              </div>
              <span>19 Oct, 2021</span>
            
              <div className="wrap">
                <p>CSS Design Awards</p>
                <div className="AwardImageBox">
                  <Image src={AwardsImage2} alt="AwardsImage2" />
                </div>
              </div>
              </div>
              <div className="CustomRow">
              <div className="wrap">
                <div className="imageBox">
                  <Image src={AwardsImage} alt="AwardsImage" />
                </div>
                <h5>Work Media</h5>
              </div>
              <span>7 Oct, 2021</span>
            
              <div className="wrap">
                <p>The FWA</p>
                <div className="AwardImageBox">
                  <Image src={AwardsImage2} alt="AwardsImage2" />
                </div>
              </div>
              </div>
          
            </div>
            <p className="desc">Want more awards? <Link href="/" className="link">Explore Now</Link></p>
          </div>
        </section>
        <section className="BlogSection pt100">
          <div className="container">
            <Blog BlogContent={allBlogsContent} extraClass="grid3" />
          </div>
        </section>
        <NewsLetter extraClass="HomeNewsLetter pt60 pb100" />
        <ContactForm />
        <OurContactBox />
        <ContactCtaBox />
      </main>
    </>
  );
}
