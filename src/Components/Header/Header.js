import React, { Component } from "react";
import backdrop from "./img/Something.jpg";
import "./Developer.css";
const myStyle = {
  backgroundImage: `url( ${backdrop} )`,
  height: 800,
  backgroundSize: "cover",
  color: "#e5e7eb"
};

class Developer extends Component {
  render() {
    return (
      <a href="#coolstuff">
        <header style={myStyle}>
          <h1> {this.props.title}</h1>
          <p> </p>
        </header>
      </a>
    );
  }
}
export default Developer;
