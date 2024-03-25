'use client'
import React from 'react'
import './button.scss';

const Button = ({ type = 'button', onClick,extraclass='', text = '' }) => {
    return (
        <button type={type} onClick={onClick} className={`commonBtn ${extraclass ? extraclass : ""}`}>
            {text}
        </button>
    )
}

export default Button
