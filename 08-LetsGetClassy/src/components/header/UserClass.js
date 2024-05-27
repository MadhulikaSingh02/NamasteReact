//Class-based Component at the end of the day normal javascript class
//Extends ReactComponent makes this class a React Class Component
import React from "react";
//or import {Component} from 'react' ->then extends Component

class UserClass extends React.Component {
  //CC must have render() that returns JSX.Diff between FC
  //When the CC is loaded/mounted, an instance of the class is created.
  //Best place to create state variable and receive props
  constructor(props) {
    super(props);

    //creating state variables-
    //this.state has special meaning
    this.state = {
      count: 0,
    };
    console.log("Child constructor");
    //this.name = this.props.name; or do the destructing in the render()
  }
  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log("Child render");
    return (
      <div className="user-card">
        <h4>{name}</h4>
        <h4>Location: Kelowna, Canada</h4>
        <h4>Software Developer</h4>
        <h5>Count-{count}</h5>
        <button
          onClick={() => {
            //update SV -Never update SV directly using assignment
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Inc-{count}
        </button>
      </div>
    );
  }
}
export default UserClass;
