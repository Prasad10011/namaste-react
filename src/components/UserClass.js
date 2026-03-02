import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log("child constructor called")
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    // console.log("child did mount called");
  }
  render() {
    // console.log("child render called");
    return (
      <div className="user-card">
        {/* <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment count
        </button> */}
        <h2>Name:{this.props.name}</h2>
        <h3>Location:Pune</h3>
        <h3>Contact:abc@abc.com</h3>
      </div>
    );
  }
}

export default UserClass;
