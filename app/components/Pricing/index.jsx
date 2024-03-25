import React from 'react'
import "./Pricing.scss";
import Link from 'next/link';

const PlansContent = [
    {
        badge : "",
        title : "Consultation",
        price : "Free",
        desc : "Your digital marketing efforts, instead of handling in-house.",
        facility1 : "Brand Design",
        facility2 : "Market Analysis",
        facility3 : "Production",
        btnTitle : "Contact Us",
        BtnLink : "/contactus",
        BtnClass : "commonBtn"
    },
    {
        badge : "Popular",
        title : "Design ",
        price : "$1500",
        desc : "Provide your business with a variety of digital solutions to promote.",
        facility1 : "Brand Design",
        facility2 : "Market Analysis",
        facility3 : "Production",
        btnTitle : "Contact Us",
        BtnLink : "/contactus",
        BtnClass : "commonBtn orangeBtn"
    },
    {
        badge : "",
        title : "Design+Code",
        price : "$2900",
        desc : "Help you hit your marketing goals and grow your business.",
        facility1 : "Brand Design",
        facility2 : "Market Analysis",
        facility3 : "Production",
        btnTitle : "Contact Us",
        BtnLink : "/contactus",
        BtnClass : "commonBtn"
    }
]
const index = () => {
  return (
    <section className="PricingSection pt100">
    <div className="container">
        <div className='title'>
            <span className='smallTitle'>Pricing</span>
            <h2>Check Our <br /> Pricing Plans</h2>
        </div>
        <div className="PricingPlansWrapper">
            {PlansContent.map((plan,i) => {
                return(
                    <div className="PlanBox">
                        <div className='badge'>{plan.badge}</div>
                        <span className='smallTitle'>{plan.title}</span>
                        <h3>{plan.price}</h3>
                        <p>{plan.desc}</p>
                        <ul className='PlansList'>
                            <li>
                                <i className='icon-plus-icon'></i>
                                <span>{plan.facility1}</span>
                            </li>
                            <li className='disablePlan'>
                                <i className='icon-minus-icon'></i>
                                <span>{plan.facility2}</span>
                            </li>
                            <li className='disablePlan'>
                                <i className='icon-minus-icon'></i>
                                <span>{plan.facility3}</span>
                            </li>
                        </ul>
                        <Link href={plan.BtnLink} className={plan.BtnClass}>{plan.btnTitle}</Link>
                    </div>
                )
            })}
           
        </div>
    </div>
  </section>
  )
}

export default index