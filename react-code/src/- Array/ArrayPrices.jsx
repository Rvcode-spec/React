import React from 'react'
import Product from './Product';
export default function ArrayPrices() {

  let products = [
    {name : "Apple" , price:"101rs"},
    {name : "Banana" , price:"100rs"},
    {name : "App" ,    price:"500rs"},
  ];

  return (
    <div>
      <ul>
        <li>
        {products.map(product => (
         <Product key={product.name} name={product.name} price={product.price}/>
        ))}
        </li>
      </ul>
        
    </div>
  )
}
