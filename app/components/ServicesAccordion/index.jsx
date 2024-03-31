'use client';
import { React,useState } from 'react';
import './ServicesAccordion.scss';

const ServicesAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (i) => {
    setIsOpen((pre)=>pre===i?null:i)
   }
    ;
    const servicesData = [
        { 
           icon : 'icon-design-tv-icon', 
           title : 'Design',
           contentTitle : 'Agency is a business you hire to outsource your digital marketing efforts',
           description : 'Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
           innerList1 : 'Web Development',
           innerList2 : 'Brand Strategy',
           innerList3 : 'Art Direction'
        },
        { 
            icon : 'icon-development-icon', 
            title : 'Development',
            contentTitle : 'Agency is a business you hire to outsource your digital marketing efforts',
            description : 'Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            innerList1 : 'Web Development',
            innerList2 : 'Brand Strategy',
            innerList3 : 'Art Direction'
         },
         { 
            icon : 'icon-settings', 
            title : 'Marketing',
            contentTitle : 'Agency is a business you hire to outsource your digital marketing efforts',
            description : 'Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            innerList1 : 'Web Development',
            innerList2 : 'Brand Strategy',
            innerList3 : 'Art Direction'
         },
      ];
  return (
    <section className='servicesAccordioSection'>
        <div className='container'>                    
                {servicesData.map((content,i) => (
                <div className={`serviceAccordion ${ isOpen === i ? 'accordionOpen' : ''} `} key={i}>
                <div className='ServicesTitleWrap' onClick={()=>toggleAccordion(i)}>
                    <div className='titleWraps'>
                      <div className='iconBox'>
                        <i className={content.icon}></i>
                      </div>
                      <h2>{content.title}</h2>
                    </div>
                    <div className='faqIcon'>
                        <i className='icon-faq-arrow-down'></i>
                      </div>
                </div>
                <div className='servicesContent'>
                  <div className='servicesInnerContent'>
                    <h3>{content.contentTitle}</h3>
                    <p>{content.description}</p>
                    <ul className='contentList'>                       
                        <li><i className='icon-true-icon'></i> 
                            <span>{content.innerList1}</span> 
                        </li>
                         <li><i className='icon-true-icon'></i> 
                         <span>{content.innerList2}</span>
                        </li>
                        <li><i className='icon-true-icon'></i>
                        <span>{content.innerList3}</span>
                        </li>
                    </ul>
                  </div>
                </div>
                </div>

            )
                
            )}    
        </div>

       </section>
  )
}

export default ServicesAccordion