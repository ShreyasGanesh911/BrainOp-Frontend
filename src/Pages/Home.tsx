import React from "react";
import SignupForm from "../components/SignupForm";


export default function Home() {
  return (
    <>
      <section
        className="page bg-slate-50 displayFlex home"
        style={{
          backgroundImage:
            "https://i.pinimg.com/736x/b4/3d/91/b43d91b07d2648e8d85d2d94c0e96135.jpg",
        }}
      >
        <div
          className="lg:w-3/4 lg:h-3/4  w-11/12  border lg:bg-white rounded-3xl flex items-center justify-evenly"
          style={{
            height: "80vh",
            backgroundImage:
              "https://i.pinimg.com/736x/b4/3d/91/b43d91b07d2648e8d85d2d94c0e96135.jpg",
          }}
        >
          <div className="lg:w-2/5 lg:h-5/6  lg:flex lg:justify-center lg:items-center hidden lg:flex-col bg-slate-200">
          <div className='overflow-hidden mx-5  border-black border-4 p-3 font-mono text-3xl' > Thrift Terrane</div>
          <p className="mt-5 text-xl p-3">The one stop <span className="text-violet-700">shop</span></p>
          </div>
          <div className="lg:w-2/5 lg:h-5/6 w-full overflow-y-hidden lg:p-0 bg-black text-white rounded-lg">
            <h1 className="p-3 ml-3 lg:text-5xl text-4xl">Get started</h1>
            <SignupForm />
          </div>
        </div>
      </section>
      
    </>
  );
}
