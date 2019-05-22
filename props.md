### Remember

Answer these on your own, then compare answers as a group

1.  What are props?
    properties passed from parent element to child element

2.  How do you pass props from a parent to a child?
    make an element in parent component which references the child element

3.  How do you access props from a class based child component?
     make sure props included in constructor and  super parameters, then this.props.propsName

4.  How do you access props from a functional component?
    include props in function parameter, then props.propsName

5.  How do you bind a function to a parent component so that it can be passed to a child? 
    make it an arrow function
   or this.askQuestion = this.askQuestion.bind(this)

### Understand

Discuss this question in pairs if you have a 4-person group

6.  What's happening in this component?

```jsx
import React, { Component } from "react";

class Queue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };

    //this.askQuestion = this.askQuestion.bind(this);
    //this.answerQuestion = this.answerQuestion.bind(this);
  }
  askQuestion = (newQuestion) => {
    const questions = [...this.state.questions, newQuestion];
    this.setState({ questions });
  }
  answerQuestion = (index) => {
    const questions = [...this.state.questions];
    questions.splice(index, 1);
    this.setState({ questions });
  }
  render() {
    <div className="queue-container">
      <h1>The Queue</h1>
      <h3>{this.state.questions.length}</h3>
      <h3>questions need answers</h3>
      <Student askQuestion={this.askQuestion} />
      <Mentor answerQuestion={this.answerQuestion} />
    </div>;
  }
}
```

### Apply

Try these on your own, but work together if you start to get stuck.

7.  Using the `Queue` component above, create a `Student` component that can add a question as a string and a `Mentor` component that can remove a question from the array.

### Analyze, Evaluate, Create

Discuss these questions as a group

8.  In the Queue component above, why are we holding state in the Queue component instead of Mentor or Student?
