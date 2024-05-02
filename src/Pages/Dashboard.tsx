import Card from '../components/Card'
import hello from "../hello.json"

import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

export default function Dashboard() {
  let [loading, setLoading] = useState(false);
    const product = hello.products
    product.length = 96
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
    {loading? <Loader />:

      <section className='page flex justify-center bg-neutral-50 py-8 '>
 
        <div className=' w-10/12 h-auto flex flex-wrap p-5 justify-around col-span-3 items-center'>
        {product.map((e)=>{
            
            return(<Card discountPercentage={e.discountPercentage} title={e.title} description={e.description} brand={e.brand} images={e.images} category={e.category} price={e.price} rating={e.rating}stock={e.stock}/>)
        })}
        </div>
      </section>
  }
    </>
  )
}
