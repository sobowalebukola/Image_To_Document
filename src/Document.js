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
    constructor(props){
    super(props);
    this.state = {
        text: ""
    }
}
componentDidMount(){
    const { need } = this.props
    this.setState({text: need})
    console.log(this.state.text)
}


    render(){
    return(
        <div style = {yes}> 
            {this.state.text}
        </div>
    )
}
}

