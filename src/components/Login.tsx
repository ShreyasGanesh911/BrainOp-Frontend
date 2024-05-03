import React, { useState } from 'react'
import { ScreenType } from '../Types/UseStateScreen'
import { ToastContainer } from 'react-toastify'
import { toastSuccess, toastWarn } from './Toast'
import { useNavigate } from 'react-router-dom'

export default function Login({login,setLogin,setScreen}:ScreenType) {
    const navigate = useNavigate()
    const [show,setShow] = useState(false)
    const [form,setForm] = useState({email:'',password:''})
    const handleVisibility = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        show? setShow(false):setShow(true)
        
    }
    const handleChange = async(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setForm({...form,[name]:value})
    }
    const handleForm = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(form.email==="" || form.password==="")
            return toastWarn("Cant leave field empty")
        try{
            const response = await fetch('https://brainop-backend-00cw.onrender.com/user/login/user/login', {
                method: "POST", 
                credentials: "include", 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(form), 
              });
              if(response.status === 403){
                localStorage.setItem("form",JSON.stringify({form}))
                return setScreen(true)
              }
              if(response.status === 200){
                toastSuccess(`Logged in`)
                setTimeout(()=>navigate('/home'),2005)
              }
              else{
                const data = await response.json()  
                
                toastWarn(data.message)
              }
 
              
        }catch(e){
            toastWarn('Internal Server Error')
            console.log(e)
        }
    }
  return (
    <>
    <form className="w-full h-5/6  lg:p-2  overflow-y-hidden flex flex-col items-center justify-center" style={{height:"60vh"}} onSubmit={handleForm}>
                <h1 className='text-4xl py-3 text-start w-3/4'>Welcome back</h1>
                <p className='w-3/4'>Don't have an account? <button onClick={()=>setLogin(true)}><span className='text-violet-400'>create account</span></button> </p>
             <div className='lg:pb-1 lg:pl-2 overflow-y-hidden w-3/4'>
              <label  >Email:</label>
                <br />
                <input onChange={handleChange} className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' type="email" required name='email' />
                </div>
             
         <div className='lg:pb-1 lg:pl-2 w-3/4 overflow-y-hidden'>
            <label  >Password:</label>
            <br />
            <input onChange={handleChange} className='text-black border px-3 py-1 my-1 rounded-sm lg:w-3/4 w-full' required  name='password' type={show?'text':'password'} />
            <button onClick={handleVisibility} className='bg-black lg:bg-white px-2 rounded lg:mx-2 mr-3 relative border border-white lg:left-0 left-56 lg:bottom-0 bottom-8 text-black' name='password' ><i className={`fa-solid lg:text-black text-white ${show?'fa-eye':'fa-eye-slash'} `}></i></button>
        </div>
        <div className='w-full flex flex-row-reverse'>
            <button className= ' mr-5    text-white border border-white p-3 rounded'>Login</button>
        </div>
    </form>
    <ToastContainer/>
    </>
  )
}
