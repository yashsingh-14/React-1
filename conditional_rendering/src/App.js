import { Loky } from "./Register_user";
import { Thor } from "./Welcome_user";
// import { useState } from "react";

// if else rendering

export function Thanos(props){

    const isRegister = props.register;

    // if(isRegister){
    //     return <Thor/>

    // }
    // else{
    //     return<Loky/>
    // }

    return (isRegister)?<Thor/>:<Loky/>

}

// if else rendering with useState and clickdetail attribute for redirect one page to another page.

// export function Thanos(){
//     const [isRegister,setRegister]=useState(false);

//     const login =()=>{
//         setRegister(true)
//     }

//     const logout=()=>{
//         setRegister(false)
//     }

//     if(isRegister){
//         return<Thor clickdetail={logout}/>
//     }
//     else{
//         return<Loky clickdetail={login}/>
//     }
// }

