//Class-based Component at the end of the day normal javascript class
//Extends ReactComponent makes this class a React Class Component
import React from "react";
//or import {Component} from 'react' ->then extends Component
import { GIT_API } from "../../utils/constants";

class UserClass extends React.Component {
  //CC must have render() that returns JSX.Diff between FC
  //When the CC is loaded/mounted, an instance of the class is created.
  //Best place to create state variable and receive props
  constructor(props) {
    super(props);

    //creating state variables-this.state has special meaning
    this.state = {
      userInfo: {
        //we may give some dummy data to our state variable
        name: "Default",
        bio: "some text",
      },
    };

    //this.name = this.props.name; or do the destructing in the render()
  }
  async componentDidMount() {
    const response = await fetch(GIT_API);
    const data = await response.json();

    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    // console.log("UnMounting");
  }
  render() {
    const { userInfo } = this.state;
    // debugger;

    return (
      <div className="user-card">
        <div>
          <h4>{userInfo.name}</h4>
          <h4>Location: Canada</h4>
          <h4>Github: {userInfo.url}</h4>
          <h4>{userInfo.bio}</h4>
        </div>
        <div>
          <img src={userInfo.avatar_url} />
        </div>
      </div>
    );
  }
}
export default UserClass;
