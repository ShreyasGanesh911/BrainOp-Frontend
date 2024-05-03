import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.preventDefault()
      console.log("hello")
      const httpresponse = await fetch(`http://localhost:4000/user/logout`, {
      method: "GET", 
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log('clicked')
    if(httpresponse.status === 200)
      return navigate('/')
  }
  const [visible,setVisible] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('token'))
        setVisible(true)
    else
      setVisible(false)
  })
  return (
    <>
    <nav className='border bg-white'>
        <div className='w-full h-36 border-b-2 border-black displayFlex pt-3 overflow-hidden'>
        <div className='overflow-hidden mx-5  border-black border-4 p-3 font-mono text-3xl' > Thrift Terrane</div>
        {visible && <>
          <button onClick={handleClick} className='bg-black text-white rounded absolute right-0 top-24 lg:mr-8 mr-2 outline-white hover:bg-neutral-700 lg:hidden displayFlex'><i className=" p-2 fa-solid fa-right-from-bracket fa-rotate-180 text-white"></i></button>
        <button onClick={handleClick} className='bg-black text-white p-3 rounded absolute right-0 top-14 lg:mr-8 mr-2 outline-white hover:bg-neutral-700 lg:visible invisible'>logout</button>
        </>}
        
        </div>
    </nav>  
    </>
  )
}
