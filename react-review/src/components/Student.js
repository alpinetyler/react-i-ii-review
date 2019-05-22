import React, { Component } from "react";

export default class Student extends Component {
  constructor(props){
      super(props)

      this.state ={
          question: ''
      }
  }

    handleChange(input){
        this.setState({
        question: input
    })
}

    askQuestion(){
        this.props.askQuestion(this.state.question)
        this.setState({
            question: ''
        })
    }



  render() {
    return (
      <div>
        <h1>Student</h1>
        <input value={(this.state.question)} onChange={(event) => this.handleChange(event.target.value)}/>
        <button onClick={ () => this.askQuestion()}>Ask a question!</button> 
      </div>
    ); 
    
  }
}