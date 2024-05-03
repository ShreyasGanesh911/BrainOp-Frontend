import React, { useState } from 'react'
import { ToastContainer } from "react-toastify";
import { toastSuccess, toastWarn } from './Toast';
import { useNavigate } from 'react-router-dom';
import {ScreenType} from '../Types/UseStateScreen'
export default function SignupForm({screen,setScreen}:ScreenType) {
    const [form,setForm] = useState({name:'',email:'',password:'',userName:'',cPassword:''})
    const [checked,setChecked] = useState(false)
    const navigate = useNavigate()
    const [show,setShow] = useState({password:false,cPassword:false})
    const handleForm = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!checked)
            return toastWarn("Need to check T&C")
        if(form.password !== form.cPassword)
            return toastWarn("Passwords don't match")
        try{
            const response = await fetch('http://localhost:4000/user/signup', {
                method: "POST", 
                credentials: "include", 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(form), 
              });
              const data = await response.json()  
              if(response.status === 409)
                return toastWarn(data.message)
              toastSuccess(`OTP has been sent to ${form.email}`)
              localStorage.setItem("form",JSON.stringify({form}))
              setTimeout(()=>setScreen(true),2005)
        }catch(e){
            toastWarn('Internal Server Error')
            console.log(e)
        }
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
      <form className='w-full h-5/6    overflow-y-hidden flex flex-col items-center justify-center'  onSubmit={handleForm}>
        <div className='lg:pb-1 lg:pl-2 overflow-y-hidden w-3/4'>
            <label  >Username:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' type="text " required name='userName' onChange={handleChange} />
        </div>

        <div className='lg:pb-1 lg:pl-2 overflow-y-hidden w-3/4'>
            <label  >Name:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' type="text " required name='name' onChange={handleChange}/>
        </div>
        <div className='lg:pb-1 lg:pl-2 overflow-y-hidden w-3/4'>
            <label  >Email:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' type="email" required name='email' onChange={handleChange}/>
        </div>
        <div className='lg:pb-1 lg:pl-2 w-3/4 overflow-y-hidden'>
            <label  >Password:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' required type={show.password?'text':'password'} name='password' onChange={handleChange}/>
            <button className='   px-2 rounded lg:mx-2 mr-3 relative  lg:left-0 left-56 lg:bottom-0 bottom-8 text-black' name='password' onClick={handleVisibility}><i className={`fa-solid lg:text-white text-black ${show.password?'fa-eye':'fa-eye-slash'}`}></i></button>
        </div>

        <div className='lg:pb-1 lg:pl-2 pb-0 w-3/4 overflow-y-hidden'>
            <label  >Confirm Password:</label>
            <br />
            <input className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full ' required type={show.cPassword?'text':'password'} name='cPassword' onChange={handleChange}/>
            <button className=' px-2 rounded lg:mx-2 mr-3 relative  lg:left-0 left-56 lg:bottom-0 bottom-8 text-black' name='cPassword' onClick={handleVisibility}><i className={` lg:text-white text-black fa-solid ${show.cPassword?'fa-eye':'fa-eye-slash'}`}></i></button>
        </div>


        <div className=' lg:w-3/4 lg:pl-3 overflow-y-hidden'>
        <input type="checkbox" name="checked" className=''  required onChange={()=>checked?setChecked(false):setChecked(true)}/> 
        <label className='mx-2 text-sm ' >Yes, I agree to the the Terms of Service  </label>
        </div>

        <div className='flex flex-row-reverse w-full lg:pr-3 my-3 lg:my-0 lg:mx-0 px-5 lg:px-0'>
        <button className='border p-3 rounded-sm hover:bg-slate-200' >Register</button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}
//