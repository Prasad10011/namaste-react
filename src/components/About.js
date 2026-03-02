import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
  constructor(props){
    super(props);
    // console.log("parent constructor called");
  }

  componentDidMount(){
    // console.log("parent did mount called")
  }
  render(){
    // console.log("parent render callled");
      return (
    <div>
      <h2>this is about page</h2>
      <User />
      <UserClass name={"prasad class"}/>
    </div>
  );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h2>this is about page</h2>
//       <User />
//       <UserClass name={"prasad class"}/>
//     </div>
//   );
// };

export default About;
