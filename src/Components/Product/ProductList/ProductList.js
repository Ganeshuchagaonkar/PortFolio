import React from 'react';
import Product from '../Product';
import './productlist.css'

export default function ProductList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title"> Create & Inspire. It's Lama</h1>
        <p className="pl-desc">Lama is creative posrtfolio that your work has been waiting for Beautiful homes.</p>
      </div>
      <div className="pl-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>


    </div>
  )
}

