import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FAQ extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <p className="center" style={{ fontFamily: "Riverside" }}>
          <Link to="/Services">
            <FontAwesomeIcon icon={(fas, "undo")} /> Services
          </Link>
        </p>
        <h1 className="center">FAQ's</h1>
        <h2 className="faq_center" style={{ fontFamily: "Helvetica" }}>
          <b> Q: How can I reach you?</b>
        </h2>
        <h4 className="center">
          {" "}
          A: My email is available on the about me page.
        </h4>
        <h2 className="faq_center" style={{ fontFamily: "Helvetica" }}>
          <b> Q: How much should I know going into the tutoring session?</b>
        </h2>
        <h4 className="center">
          A: Nothing at all. The beginning sessions gauge where we'll start.
        </h4>
        <h2 className="faq_center" style={{ fontFamily: "Helvetica" }}>
          <b>Q: What are your qualifications?</b>
        </h2>
        <h4 className="center">
          A: I have been vetted by both Dutchess Community College(Tutor), and
          Cornell University(Teaching Assistant). I have received my masters in
          Information Science and am in pursuit of obtaining my masters in
          Computer Science.
        </h4>
        <h2 className="faq_center">
          <b>Q: Why do prices vary?</b>
        </h2>
        <h4 className="center">
          A: Based on distance. The increase in prices pays for expense of
          transportation.
        </h4>
      </Fragment>
    );
  }
}

export default FAQ;
