import React from 'react'
import './product.css'

export default function Product({img,link}) {
  return (
    <div className='p'>
      <div className="p-browzer">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link}>
        <img src={img} alt="Not found" className='p-image' />
      </a>
    </div>
  )
}
