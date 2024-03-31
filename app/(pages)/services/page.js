import React from 'react'
import Banner from '@/app/components/Banner'
import AboutUs from '@/app/components/AboutUs'
import "./page.scss";
import ServicesAccordion from '@/app/components/ServicesAccordion';
import WhoWeAre from '@/app/components/WhoWeAre';
import ContactCtaBox from '@/app/components/ContactCtaBox';
const page = () => {
  return (
    <main>
        <Banner
        title="Services"
        desciption="Agency provides a full service range including technical skills, design, business understanding."
      />
      <AboutUs smallTitle = 'Services'
        title = "Digital agency is a business you hire to outsource your digital marketing efforts"
        description1 = "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        description2 = "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
       />
       <ServicesAccordion />
       <WhoWeAre />
       <ContactCtaBox />
    </main>
  )
}

export default page