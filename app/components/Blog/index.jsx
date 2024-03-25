'use client'
import Image from 'next/image'
import React from 'react'
import './Blog.scss';
import Link from 'next/link';

const Blog = ({BlogContent,extraClass}) => {
  return (
    <>
    <div className={` BlogsWrapper ${
                extraClass ? extraClass : ''
            }`}>
      {BlogContent.map((card,i) => {
        return(
          <div className='BlogCard' key={i}>
            <div className='BlogImageBox'>
              <Image src={card.image} />
            </div>
            <div className='blogContent'>
              <span className='badgeTitle'>{card.blogBadge}</span>
              <h3>{card.title}</h3>
              <p className='date'>{card.date}</p>
            </div>
            <Link href='/' className='blogLink'></Link>
          </div>
        )
        
        
      })}
      {/* {BlogContent.map} */}
    </div>
    </>
  )
}

export default Blog