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
        try{
            const response = await fetch('http://localhost:4000/user/verify', {
                method: "POST", 
                credentials: "include", 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({email,password:num}), 
              });
              if(response.status === 200){
                toastSuccess("Account verified")
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

    const handleResendMail = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
            e.preventDefault()
            try{
                const response = await fetch('http://localhost:4000/user/resend', {
                    method: "POST", 
                    credentials: "include", 
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email}), 
                  });
                  if(response.status === 200){
                    toastSuccess("Resent verification code")
                    
                  }
                  else
                    toastWarn('Oops something went wrong')
            }catch(err){

            }
    }
    useEffect(()=>{
        const body:string = localStorage.getItem('form') || ''
        const form = JSON.parse(body)
        setEmail(form.form.email)
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
                <button  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleClick}>Verify</button>
            <button className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800 ml-4" onClick={handleResendMail}>Resend OTP</button>
             </div>
         </form>

     </div>  
     <ToastContainer/>
    </>
  )
}
