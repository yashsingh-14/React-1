// import { Component } from "react"

// export function Avenger() {
//     return <h1>Avenger Assemble</h1>
// }

// export class AvengerClass extends Component {
//     render() {
//         return <h1>Avenger Assemble by class</h1>
//     }
// }



import { Header, Avenger, Footer, AvengerClass} from "./Shield";

export function ShieldPass() {
    return <>
        <Header />
        <Avenger fname='steve' lname='Roger' />
        <Avenger fname='Tony' lname='stark' />
        <AvengerClass fname='Bruce' lname='Banner' />
        <Footer />
    </>
}