import React, { Component } from "react"
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';
 
export default class Spin extends Component {
    render() {
      return (<div> <Dots color="black" size={32} speed={1} animating={true} /> </div>)

  }
}