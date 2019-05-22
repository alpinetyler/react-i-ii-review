import React, { Component } from "react";

export default class Mentor extends Component {
  
    constructor(props){
        super(props)
    }
  
  
 
  render() {

    console.log(this.props)
    return (
      <div>
        <h1>Logan Mace</h1>
        
        <h2>"Logan saved the day!"</h2>
        <h3>questions to answer</h3>

        <button onClick={this.props.foo}>Answer a question!</button>
        
      </div>
    ); 
    
  }
}