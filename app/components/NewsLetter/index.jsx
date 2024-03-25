import React from 'react'
import "./NewsLetter.scss";
import Input from "@/app/components/Input";
import Button from '../Button';
const NewsLetter = ({extraClass}) => {
  return (
    <section className='newsLetterSection pt60'>
      <div className='container'>
        <div className= {`newsLetterWrapper pb60 ${extraClass ? extraClass : ''}`}>
          <h3>Newsletter</h3>
            <form action="">
              <div className='newsLetterForm'>
                <Input type="email" id="email"  Name="email"  placeholder="Your email" />
                <Button type='submit' text="Subscribe" />
              </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter