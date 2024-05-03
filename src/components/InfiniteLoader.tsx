import {CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
export default function InfiniteLoader() {
  return (
    <>
<div className='w-full bg-neutral-50 h-36 overflow-hidden py-4'>
<HashLoader
        color="black"
        loading= {true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</div>
    </>
  )
}
