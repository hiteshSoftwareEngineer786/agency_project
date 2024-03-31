import React from 'react'
import './OurClients.scss';

const index = ({extraClass , ClientsContent = [ '/images/dark-client-img1.png' , '/images/dark-client-img2.png' , '/images/dark-client-img3.png' , '/images/dark-client-img4.png' , '/images/dark-client-img5.png']}) => {
  return (
    <section className={`clinetsSection pt100 ${extraClass ? extraClass : ''}`}>
        <div className='container'>
            <ul className='ClientsWrapper'>
                {ClientsContent.map((content , i) => {
                    return (
                        <li key={i}>
                            <img src={content} alt="client image" />
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default index