import { Loky } from "./Register_user";
import { Thor } from "./Welcome_user";
import { useState } from "react";

export function Thanos(){
    const [isRegister,setRegister]=useState(false);

    const login =()=>{
        setRegister(true)
    }

    const logout=()=>{
        setRegister(false)
    }

    if(isRegister){
        return<Thor clickdetail={logout}/>
    }
    else{
        return<Loky clickdetail={login}/>
    }
}