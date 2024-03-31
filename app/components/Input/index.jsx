'use client'
import React from 'react'
import './Input.scss';

const input = ({type="",iclass="",Name="",id="",placeholder="",error="",register,...rest}) => {
  return (
    <div className='InputWrapper'>
      {
        type==="textarea" ? 
        (
          <textarea
          id={id}
          placeholder={placeholder}
          type={type}
          className={iclass}
          {...(register && register(Name))}
          {...rest}
        />
      ) :
      (
        <input id={id}
        placeholder={placeholder}
        type={type}
        className={iclass} name={Name} />
      )
      }
       
        <span className="errorMsg">{error}</span>
    </div>
  )
}

export default input