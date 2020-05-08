import React, { Component } from "react";
import backdrop from "../../img/NewDeveloper_Drop.jpg";
import "./Developer.css";
import "../../index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, fas);

const myStyle = {
  backgroundImage: `url( ${backdrop} )`,
  height: 500,
  backgroundSize: "cover",
};

class Developer extends Component {
  render() {
    return (
      <div className="tile">
        <header style={myStyle}>
          <h1 style={{ "font-family": "Futura" }}> {this.props.title} </h1>

          <p style={{ "font-family": "Futura" }}>
            <a href="https://github.com/tophthewise">
              {" Code "}
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </p>
        </header>
      </div>
    );
  }
}
export default Developer;
