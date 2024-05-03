import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toastSuccess, toastWarn } from './Toast'
import { ToastContainer } from 'react-toastify'

export default function OtpField() {
    const navigate = useNavigate()
    const [value,setValue] = useState({f1:'',f2:'',f3:'',f4:''})
    const [email,setEmail] = useState('')
    const [verification,setVerification] = useState<number>()
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let  name = e.target.name
        let value2 = e.target.value
        setValue({...value,[name]:value2})
    }
    const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        let otp:string[]=[]
        otp.push(value.f1,value.f2,value.f3,value.f4)
        const num:number = Number(otp.join(''))
        if(num === verification){
           toastSuccess("Verified successfully")
           setTimeout(()=>navigate('/home'),2005)
        }
        else{
            toastWarn("Incorrect code")
        }
     
            
    }

    const handleResendMail = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
            e.preventDefault()
    }
    useEffect(()=>{
        const body:string = localStorage.getItem('form') || ''
        const form = JSON.parse(body)
        console.log(form)
        setEmail(form.form.email)
        setVerification(form.otp)
    },[])
  return (

    <>
     <div className="w-full h-full  flex items-center justify-center"> 
            <form className="shadow-md px-4 py-6">
                 <h1 className="text-4xl py-2 my-3">Verify</h1> 
                 <p className='text-sm py-2 text-center'>A verification code has been sent to <span className='text-violet-500 text-lg'>{email}</span></p>
                <div className="flex justify-center gap-2 mb-6 text-black">
                    <input name='f1' value={value.f1} onChange={handleChange} className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric"  autoComplete="one-time-code"  required/>
                    <input name='f2' value={value.f2} onChange={handleChange} className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required/>
                    <input name='f3' value={value.f3} onChange={handleChange} className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required/>
                    <input name='f4' value={value.f4} onChange={handleChange} className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required/>
                </div>
            <div className="flex items-center justify-center">
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleClick}>Verify</button>
            <button className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800 ml-4" onClick={handleResendMail}>Resend OTP</button>
             </div>
         </form>

     </div>  
     <ToastContainer/>
    </>
  )
}
