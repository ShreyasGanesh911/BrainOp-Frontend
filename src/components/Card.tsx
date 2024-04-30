import React from 'react'
type Props = {
    title:String,
    description:String,
    price:Number,
    brand:String,
    images:String[],
    rating:Number,
    stock:Number,
    category:String
}
export default function Card({title,description,price,brand,images,rating,stock,category}:Props) {
  return (
    <>
    <div className='w-11/12 border border-purple-600 h-40 my-3'>
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{price.toString()}</p>
        <p>{description}</p>

    </div>
    </>
  )
}
