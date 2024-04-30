import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import hello from "../hello.json"
export default function Dashboard() {
    const product = hello.products
    product.length = 10
  return (
    <>
      <section className='page flex justify-center bg-white py-8'>
        <div className='border w-11/12 h-auto flex flex-col justify-start items-center'>
        {product.map((e)=>{
            
            return(<Card title={e.title} description={e.description} brand={e.brand} images={e.images} category={e.category} price={e.price} rating={e.rating}stock={e.stock}/>)
        })}
        </div>
      </section>
    </>
  )
}
