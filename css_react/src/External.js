import "./External.css"
import style from "./External.module.css"
import style1 from "./External2.module.css"

export function Iron() {
    return <>
        <h1 className="one">welcome External file one classs</h1>
        <h2 className={style.a}>Welcome External Module file a class</h2>
        <h3 className={style1.a}>Welcome External2 Module  file a class css </h3>
    </>

}