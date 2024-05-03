import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import OtpField from "../components/OtpField";
import Login from "../components/Login";


export default function Home() {
  const [screen,setScreen] = useState(false)
  const [login,setLogin] = useState(true)
  return (
    <>
      <section
        className="page bg-slate-50 displayFlex home"
        
      >
        <div
          className="lg:w-3/4 lg:h-3/4  w-11/12  border lg:bg-white rounded-3xl flex items-center justify-evenly"
          style={{
            height: "80vh",
           
          }}
        >
          <div className="lg:w-2/5 lg:h-5/6  lg:flex lg:justify-center lg:items-center hidden lg:flex-col bg-slate-200">
          <div className='overflow-hidden mx-5  border-black border-4 p-3 font-mono text-3xl' > Thrift Terrane</div>
          <p className="mt-5 text-xl p-3">The one stop <span className="text-violet-700">shop</span></p>
          </div>
          <div className="lg:w-2/5 lg:h-5/6 w-full overflow-y-hidden lg:p-0 bg-black text-white rounded-lg">
            {!screen?
                       <>
                       {
                          login ? <>
                            <h1 className="p-2 ml-3 lg:text-5xl text-4xl">Get started</h1>
                            <p className="w-full  text-center lg:text-start lg:mx-10">Have an account <button onClick={()=>setLogin(false)}><span className="text-violet-300">Login now</span></button></p>
                        <SignupForm screen={screen} setScreen={setScreen} login={login} setLogin={setLogin} />
                          </>:<>
                            <Login screen={screen} setScreen={setScreen} login={login} setLogin={setLogin} />
                          </>
                       }
                       </>
                       : <OtpField/>

          }
          </div>
        </div>
      </section>
      
    </>
  );
}
