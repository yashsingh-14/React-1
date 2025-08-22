import { Component } from "react";

export class Avenger extends Component {

    state = {
        name: 'vicky',
        interest: 'cycling'

    }

    constructor(props) {
        super(props)
        this.state = {
            name: 'vicky',
            interest: 'cycling'

        }
    }

    changeName = () => {
        this.setState({ name: 'tony', interest: 'killing thanos' })
    }
    render() {
        return <>
            <h1>hello my name is {this.state.name} and i like {this.state.interest}</h1>
            <button type="button" onClick={this.changeName}>surprice</button>
        </>
    }
}