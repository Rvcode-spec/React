import React from 'react'
export default function Product({price, name}) {
    const Price = parseInt(price.replace('rs', ''));

  return (
    <div>
        <ul>
        <li>{Price>100 ?<h3>The Price of {name} is {price}</h3>:" "}</li>
        </ul>
       
      
    </div>
  )
}
