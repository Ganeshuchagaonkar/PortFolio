import React from 'react';
import Product from '../Product';
import './productlist.css'
import { product } from '../../../data';

export default function ProductList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title"> About the Projects</h1>
        <p className="pl-desc">All web app are developed using <b>react.js</b> and Mobile apps are developed using <b>Flutter</b> and <b>Dart </b>.</p>
      </div>
      <div className="pl-list">
        {
          product.map((item)=> <Product key={item.id} link={item.link} img={item.img}  />)
        }
        
        
      </div>


    </div>
  )
}

