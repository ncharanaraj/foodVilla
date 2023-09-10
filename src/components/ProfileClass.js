import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: "",
      name: "",
      location: "",
      bio: "",
    };
    console.log("constructor 1");
  }

  async componentDidMount() {
    console.log("componentDidMount 3");
    const response = await fetch("https://api.github.com/users/ncharanaraj");
    const data = await response.json();
    this.setState(data);

    this.time = setInterval(() => {
      console.log("setinterval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate 4");
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.time);
  }

  render() {
    console.log("render 2");
    return (
      <>
        <img
          src={this.state.avatar_url}
          alt={this.state.name}
          style={{ width: "100px" }}
        />
        <h3>{this.state.name}</h3>
        <p>{this.state.location}</p>
        <p>{this.state.bio}</p>
      </>
    );
  }
}

export default ProfileClass;
