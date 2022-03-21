import React, { Component } from 'react'

export default class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value: "Login",
            //   logout:"Logout"
        }
    }




    signinOut = () => {
        if (this.state.value === "Login") {
            this.setState({ value: "Logout" })
        }
        else {
            this.setState({ value: "Login" })
        }
    }
    
    



    render() {
        return (
            <>
                <button onClick={this.signinOut}> {this.state.value}</button>
            </>
        )
    }
}