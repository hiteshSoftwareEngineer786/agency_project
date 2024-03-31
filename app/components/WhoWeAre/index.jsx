import React from 'react'
import './WhoWeAre.scss';

const WhoWeAre = ({extraClass,homeContent}) => {
  return (
    <section className={`whoWeAreSection pt100 ${extraClass ? extraClass : ''}`}>
        <div className='container'>
            <div className={`whoWeAreWrapper ${homeContent ? 'pb100' : ''}`}>
            <div className='contentDetails'>
                <div className='innerContent'>
                    <span className='smallTitle'>How we work</span>
                    <h3>Making Your Projects Look Awesome</h3>
                    <p>Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.</p>
                </div>
            </div>
            <div className='WorkDetails'>
                <div className='wrap'>
                    <span className="number">1</span>
                    <h4>Full service range including</h4>
                </div>
                <div className='wrap'>
                    <span className="number">2</span>
                    <h4>Technical skills, design, business</h4>
                </div>
                <div className='wrap'>
                    <span className="number">3</span>
                    <h4>Themselves in the merchant's</h4>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre