import { motion } from 'framer-motion'
import React from 'react'
type Props = {
    title:String,
    description:String,
    price:number,
    brand:String,
    images:string[],
    rating:Number,
    stock:Number,
    category:String,
    discountPercentage:number
}

export default function Card({title,description,price,brand,images,rating,stock,category,discountPercentage}:Props) {
  return (
    <>
    <motion.div initial={{scale:1,x:-20,opacity:0}} whileHover={{scale:1.1}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className='w-80 mx-5  bg-white h-72 my-5 flex flex-col rounded-xl font-sans'>
      <div className='h-4/6 p-3 overflow-y-hidden '>
      <motion.img initial={{opacity:1}} whileHover={{opacity:0.75}} src={images[0]} className=' w-full h-full object-contain' alt="" />
      <span className='bg-red-500 p-1 text-sm relative  bottom-44 float-right font-sans text-white rounded'>{Math.floor(discountPercentage)} %</span>
      </div>
      <div className='h-2/6  flex '>
       <div className='w-3/4  p-2'>
       <p className='truncate font-sans text-lg'>{title} </p>
        <p className='font-sans tracking-wide my-'><span className='line-through mr-3 text-red-700'>₹{(82*price).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span> <span className='text-green-700'>₹{Math.ceil((82*price)-(82*price*(discountPercentage/100))).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span></p>
       </div>
       <p className='py-1 h-10 '>
        {rating.toString()} <i className="fa-solid fa-star text-green-600"></i>
       </p>
      </div>
    </motion.div>
    </>
  )
}
