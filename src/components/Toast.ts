import {toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccess = (message:string)=>{
    toast.success(message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}

export const toastWarn = (message:string)=>{
    toast.warn(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        })
}