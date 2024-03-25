import React from 'react'
import './ContactForm.scss';
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";

const index = () => {
  return (
    <section className="contactUsSection pt100 pb100">
        <div className="container">
          <div className="contactform">
            <form action="">
              <h4>Get In Touch</h4>
              <Input type="email" Name="email" id="email" placeholder="Your Email" />
              <Input type="text" Name="subject" id="subject" placeholder="Subject" />
              <Input type="textarea" Name="Message" id="Message" placeholder="Message" />
              <div className="BtnBox">
              <Button type="submit" text="Submit Now" extraclass="formBtn" />
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default index