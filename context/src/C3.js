

// export function Child3(props) {
//     return <>
//         <h1>Child3</h1>
//         <h3>Power of Steve Roger is :{props.power1} </h3>

//     </>
// }

import React, { useContext } from 'react'
import { PowerContext } from './PowerContext'

export function Child3() {
    const {power,city}= useContext(PowerContext)

    return <>
        <h1>Child3</h1>
        <h3>Power of Steve Roger is :{power} </h3>
        <h3>City of Steve Roger is : {city}</h3>

    </>
}