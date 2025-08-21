//second prac
import { Component } from "react"
export function Header(){

    return <h1>Welcome to the shield</h1>
}

export function Avenger(props){
    return <h2>Hello I am {props.fname}{props.lname}</h2>
}


export function Footer(){
    return <h3>shield copywright@2025</h3>
}

export class AvengerClass extends Component{
    render(){
        return <h2> Hello I am {this.props.fname} {this.props.lname}</h2>
    }
}