import "./External_2.css"

import style1 from "./External2.module.css"

export function Thor() {
    return <>
        <h1 className="one">welcome External 2 file one class</h1>
        <h1 className={style1.a}>Welcome External2 module file a class css</h1>
    </>
}