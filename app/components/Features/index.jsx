import React from 'react'
import './Features.scss';
import Link from 'next/link';
const index = ({caption,title,description,linkTitle,icon,}) => {
  return (
    <section className='featuresSection pt100'>
        <div className='container'>
            <div className='featuresWrapper'>
                <div className='contentBox'>
                    <div className='TitleContent'>
                        <span className='smallTitle'>{caption}</span>
                        <h5>{title}</h5>
                        <p>{description}</p>
                        <Link href='/' className='feturesLink link'>{linkTitle}</Link>
                    </div>
                </div>
                <div className='featuresContent'>
                    <div className='CardInnerBox'>
                        <div className='iconBox'>
                            <i className='icon-professional-icon'></i>
                        </div>
                        <h4>Professional</h4>
                        <p>Full service range including technical skills, design.</p>
                    </div>
                    <div className='CardInnerBox'>
                        <h4>Accessibility</h4>
                        <p>Business understanding, ability to put themselves.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default index