import { Dispatch, SetStateAction } from "react"

export type ScreenType ={
    screen : boolean,
    setScreen: Dispatch<SetStateAction<boolean>>
    login:boolean,
    setLogin:Dispatch<SetStateAction<boolean>>
} 

