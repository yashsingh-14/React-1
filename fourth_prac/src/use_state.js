import { useState } from "react";

export function Avenger(){

    const [name, setName]=useState('Tony Stark')
    const [heroic_name, setHeroicName] = useState('Iron Man')

    const changeName=()=>{
        setName("Bruce Banner")
        setHeroicName("Hulk");
    }
    return<>
    <h1>Hello {name} my heroic name is {heroic_name}</h1>
    <button type="button" onClick={changeName}>click me</button>
    </>
}