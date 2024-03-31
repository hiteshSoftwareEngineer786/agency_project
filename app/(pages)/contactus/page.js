import React from "react";
import Banner from "@/app/components/Banner";
import ContactForm from "@/app/components/ContactForm";
import OurContactBox from "@/app/components/OurContactBox";
import './page.scss';
import FAQ from "@/app/components/FAQ";

const page = () => {
  return (
    <main>
      <Banner
        title="Contact"
        desciption="Agency provides a full service range including technical skills, design, business understanding."
      />
      <ContactForm />
      <OurContactBox />
      <FAQ />
    </main>
  );
};

export default page;
