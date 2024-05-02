import React from 'react'
import {CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function Loader() {
  return (
    <>
         <section className=" displayFlex bg-slate-50 absolute top-0 bottom-0 right-0 left-0 z-40 overflow-hidden" style={{width:"100vw",height:"100vh"}}>
    <HashLoader
        color="black"
        loading= {true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section> 
    </>
  )
}
