import React, { Component } from "react";
import App from "./App";

var yes = {
    display: "flex",
    alignItems : "center",
    justifyContent: "center",
    width : "100vw",
    height: "100vh"

}
export default class Doc extends Component{
    state = {
        text: ""
    }
    render(){
        const { need } = this.props
        this.setState({text: need})
    return(
        <div style = {yes}> 
            {this.state.extt}
        </div>
    )
}
}

