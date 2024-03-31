'use client';
import { React,useState } from 'react';
import './FAQ.scss';
import Link from 'next/link';

const FAQ = ({extraClass=""}) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (i) => {
    setIsOpen((pre)=>pre===i?null:i)
}
    ;
    const data = [
        { id: 1, title: 'A digital agency is a business', content: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.' },
        { id: 2, title: 'Hire to outsource your digital', content: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.' },
        { id: 3, title: 'Marketing efforts', content: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.' },
        { id: 4, title: 'Can provide your business', content: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.' },
      ];
  return (
    <section className='faqSection pt100'>
        <div className='container'>
            <div className={`faqRow ${extraClass ? extraClass : ' '}`}>
                <div className='faqDetails'>
                    <div className='faqInnerContent'>
                        <span className='smallTitle'>Faq</span>
                        <h3>Frequently Asked Questions</h3>
                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <Link href='/' className='link'>Ask us anything</Link>
                    </div>
                </div>
                <div className='faqsWrapper'>
                <div className="accordion-container">
                    {data.map((item,i) => (
                        <div className={`accordionItem ${ isOpen === i ? 'accordionOpen' : ''}`} >
                        <div className='accordionTitleBox' onClick={()=>toggleAccordion(i)}>          
                            <h4>{item.title}</h4> 
                            <div className='faqIcon'>
                                <i className='icon-faq-arrow-down'></i>
                            </div>
                        </div>
                        <div className="accordionContent">
                            <p>{item.content}</p>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default FAQ