import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <>
      <section className='page flex items-center justify-center flex-col bg-white home'>
        <div className='bg-white flex items-center justify-center flex-col lg:w-1/4 w-11/12 py-3 rounded-xl'>
        <h1 className='text-9xl p-10' >:-/</h1>    
        <p className='text-3xl p-5'>404</p>
        <p>This page isn't available</p>
       <Link to="/home"> <button className='p-3 border rounded-md bg-yellow-400 hover:bg-yellow-500 m-3 border-yellow-600'>Go back home</button></Link>
        </div>
    </section> 
    </>
  )
}
