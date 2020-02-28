import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form, Input, Button } from "reactstrap";

import "./Tutoring.css";

class Tutoring extends Component {
  state = {};
  render() {
    const centerStyle = {
      "font-size": "1.2em",
      width: "10%",
      margin: "0 auto"
    };
    return (
      <Fragment>
        <h1 className="center" style={{ fontFamily: "Riverside" }}>
          Services
        </h1>
        <h2 className="center"> Tutoring</h2>
        <h4 className="center">
          I offer tutoring services in Mathematics and Computer Science. In
          mathematics I tutor remedial algebra up to differential calculus. In
          Computer Science I tutor fundamentals(Data Structures, Language,
          Syntax) and web development(Full Stack, Web Architecture, and advanced
          topics). <br />
          <br />
          $10/hr if in the Poughkeepsie/New Paltz area
          <br />
          $15/hr if the drive is further
          <br />
        </h4>
        <h2 className="center" hidden>
          Consulting
        </h2>
        <h4 className="center" hidden>
          I offer services consulting on small projects as an independent
          contractor. I have worked on Site Optimization for small E-commerce
          clients as well as freelance designers.
        </h4>
        <h4 className="center" hidden>
          My rate as a consultant is $30/hr
        </h4>
        <br />
        <br />
        <br />
        <br />

        <h2 className="center"> Have a Question?</h2>
        <h4 className="center">
          <Link to="/FAQ">See FAQ's</Link>
        </h4>
      </Fragment>
    );
  }
}

export default Tutoring;
