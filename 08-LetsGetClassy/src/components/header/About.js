import food_pizza from "../../images/food_pizza.jpg";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import { SWIGGY_APP_URL } from "../../utils/constants";
// export default About = () => {
//   return (
//     <div>
//       <div className="about-container about ">
//         <div className="about-left">
//           <h1>
//             Welcome to <span>The Food Truck</span>
//           </h1>
//           <h3>
//             A place where you're guaranteed to discover something to your
//             liking!
//           </h3>
//           {/* <div className="about-user-container">
//             <User name={"Madhu Singh"} />
//           </div> */}
//           <div className="about-user-container">
//             <UserClass name={"Madhulika S"} />
//           </div>
//         </div>
//         <div className="about-right">
//           <img src={food_pizza} alt="Food Image" />
//         </div>
//       </div>
//     </div>
//   );
// };
export default class About extends Component {
  constructor(props) {
    super(props);
    console.log("About Constructor");
  }

  componentDidMount() {
    console.log("About Did Mount");
    // const response = await fetch(SWIGGY_APP_URL);
    // const json = await response.json();

    // console.log(json);
  }
  render() {
    console.log("About Render");
    return (
      <div>
        <div className="about-container about ">
          <div className="about-left">
            <h1>
              Welcome to <span>The Food Truck</span>
            </h1>
            <h3>
              A place where you're guaranteed to discover something to your
              liking!
            </h3>
            {/* <div className="about-user-container">
                <User name={"Madhu Singh"} />
              </div> */}
            <div className="about-user-container">
              <UserClass name={"Madhulika S"} />
            </div>
          </div>
          <div className="about-right">
            <img src={food_pizza} alt="Food Image" />
          </div>
        </div>
      </div>
    );
  }
}
