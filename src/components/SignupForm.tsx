import React, { useState } from 'react'

export default function SignupForm() {
    const [form,setForm] = useState({name:'',email:'',password:'',userName:'',cPassword:''})
    const [checked,setChecked] = useState(false)
    const [show,setShow] = useState({password:false,cPassword:false})
    const handleForm = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(!checked)
            console.log("Need to accept T&C")
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setForm({...form,[name]:value})
    }
    const handleVisibility = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const name = e.currentTarget.name 
        name === 'password' ? (show.password ? setShow({...show,[name]:false}):setShow({...show,[name]:true})):(show.cPassword ?setShow({...show,[name]:false}):setShow({...show,[name]:true}))
    }
    
  return (
    <>
      <form className='w-full h-5/6  lg:p-2  overflow-y-hidden flex flex-col items-center justify-center'  >
        <div className='lg:pb-1 lg:pl-2 overflow-y-hidden w-3/4'>
            <label  >Username:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' type="text " name='userName' onChange={handleChange} />
        </div>
        <div className='lg:pb-1 lg:pl-2 w-3/4'>
            <label  >Email:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' type="email" name='email' onChange={handleChange}/>
        </div>
        <div className='lg:pb-1 lg:pl-2 w-3/4'>
            <label  >Name:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' type="text " name='name' onChange={handleChange}/>
        </div>
        <div className='lg:pb-1 lg:pl-2 w-3/4 overflow-y-hidden'>
            <label  >Password:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' type={show.password?'text':'password'} name='password' onChange={handleChange}/>
            <button className='   px-2 rounded lg:mx-2 mr-3 relative  lg:left-0 left-56 lg:bottom-0 bottom-8 text-black' name='password' onClick={handleVisibility}><i className={`fa-solid lg:text-white text-black ${show.password?'fa-eye':'fa-eye-slash'}`}></i></button>
        </div>

        <div className='lg:pb-1 lg:pl-2 pb-0 w-3/4 '>
            <label  >Confirm Password:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full ' type={show.cPassword?'text':'password'} name='cPassword' onChange={handleChange}/>
            <button className=' px-2 rounded lg:mx-2 mr-3 relative  lg:left-0 left-56 lg:bottom-0 bottom-8 text-black' name='cPassword' onClick={handleVisibility}><i className={` lg:text-white text-black fa-solid ${show.cPassword?'fa-eye':'fa-eye-slash'}`}></i></button>
        </div>


        <div className=' lg:w-3/4 lg:pl-3'>
        <input type="checkbox" name="checked" className=''  onChange={()=>checked?setChecked(false):setChecked(true)}/> 
        <label className='mx-2 text-sm ' >Yes, I agree to the the Terms of Service  </label>
        </div>

        <div className='flex flex-row-reverse w-full lg:pr-3 my-3 lg:my-0 lg:mx-0 px-5 lg:px-0'>
        <button className='border p-3 rounded-sm hover:bg-slate-200' onClick={handleForm}>Register</button>
        </div>
      </form>
    </>
  )
}
//