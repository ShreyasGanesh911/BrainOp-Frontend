import React from 'react'
import SignupForm from '../components/SignupForm'

export default function Home() {
  return (
    <>
     <section className='page bg-slate-50 displayFlex home'style={{backgroundImage:"https://i.pinimg.com/736x/b4/3d/91/b43d91b07d2648e8d85d2d94c0e96135.jpg"}}>
        <div className='w-3/4 h-3/4 border bg-white rounded-3xl flex items-center' style={{height:"80vh",backgroundImage:"https://i.pinimg.com/736x/b4/3d/91/b43d91b07d2648e8d85d2d94c0e96135.jpg"}}>
        <div className='w-3/5 h-5/6 bg-gray-50'></div>
        <div className='w-2/5 h-5/6 bg-black text-white rounded-lg'>
            <h1 className='p-3 text-5xl'>Get started</h1>
            <SignupForm/>
        </div>
        
        </div>
    </section> 
    </>
  )
}
