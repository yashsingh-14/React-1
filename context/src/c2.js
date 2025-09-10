import { Child3 } from "./c3"

// export function Child2(props) {
//     return <>
//         <h1>Child2</h1>
//         <Child3 power1={props.power } />
//     </>
// }


export function Child2(props) {
    return <>
        <h1>Child2</h1>
        <Child3/>
    </>
}