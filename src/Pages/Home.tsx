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
          <div className="lg:w-2/5 lg:h-5/6  lg:flex lg:justify-center lg:items-center hidden">
            <img
              className="object-contain w-full h-full"
              src="https://raw.githubusercontent.com/ShreyasGanesh911/kick-street/master/src/Assets/mural.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-2/5 lg:h-5/6 w-full lg:p-0 bg-black text-white rounded-lg">
            <h1 className="p-3 ml-3 lg:text-5xl text-4xl">Get started</h1>
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
}
