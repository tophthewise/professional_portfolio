import React, { Component, Fragment } from "react";
import backdrop from "../../img/Design_drop_4.jpeg";
import backdrop_m from "../../img/Design_drop3.jpg";
//change image to something dope
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Designer.css";
import MediaQuery from "react-responsive";

library.add(fab, fas);

const myStyle = {
  backgroundImage: `url( ${backdrop} )`,
  height: 500,
  backgroundSize: "cover",
  "font-family": "Riverside",
  color: "#e5e7eb"
};
const myStyle2 = {
  backgroundImage: `url( ${backdrop_m} )`,
  height: 500,
  backgroundSize: "cover",
  "font-family": "Riverside"
};
const subhead = {
  "font-size": "48px",
  "font-family": "Riverside"
};

class Designer extends Component {
  render() {
    return (
      <Fragment>
        <MediaQuery minWidth={1000}>
          <div className="tile">
            <header style={myStyle}>
              <h1> {this.props.title}</h1>
              <p style={subhead}>
                <Link to="/Designer" style={subhead}>
                  {" Projects "}
                  <FontAwesomeIcon icon={["fas", "drafting-compass"]} />
                </Link>
              </p>
            </header>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1000}>
          <div className="tile">
            <header style={myStyle2}>
              <h1> {this.props.title}</h1>
              <p>
                {" "}
                <Link to="/Designer" style={subhead}>
                  {" Designs "}
                </Link>
              </p>
            </header>
            <FontAwesomeIcon icon={["fas", "drafting-compass"]} />
          </div>
        </MediaQuery>
      </Fragment>
    );
  }
}
export default Designer;
