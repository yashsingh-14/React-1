import { useState } from "react";

export function Avenger() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return <>
        <h1>Count : {count}</h1>
        <button type="button" onClick={increase}>Increament</button>
        <button type="button" onClick={decrease}>Decrease</button>
        <button type="button" onClick={reset}>Reset</button>

    </>
}