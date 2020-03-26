import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./Projects.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import MediaQuery from "react-responsive";

import { Link } from "react-router-dom";
import CIPic from "../../img/CheckinIn.png";
import EKPic from "../../img/EscapeKey3.png";
import comingsoon from "../../img/ComingSoon.jpg";
import Endgame from "../../img/Avengers_Tony.jpg";

class Projects extends Component {
  render() {
    const ImgStyle = {
      height: "40vh",
      width: "100%",
      "border-radius": "17%",
      "padding-top": "5vh"
    };
    const visiText = { "font-size": "1.2rem" };
    const spacing = { paddingBottom: "10%" };
    const mobile = {
      border: "solid white",
      "border-radius": "10%",
      display: "inline-table",
      "margin-left": "6.5vw",
      "text-align": "center",
      height: "600px",
      width: "80%"
    };

    return (
      <Fragment>
        {/*<p> Hi im paul!</p>*/}
        <div className="background">
          <div className="center">
            <h1
              className="center display-3"
              style={{ fontFamily: "Riverside" }}
            >
              Projects
            </h1>
          </div>
          <MediaQuery minWidth={1000}>
            <div className="centerCard">
              <div className="test">
                <Card col-xs="3">
                  <CardImg
                    top
                    style={ImgStyle}
                    width="100%"
                    src={comingsoon}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle
                      style={{ fontFamily: "Riverside", fontSize: "2.0em" }}
                      tag="h2"
                      className="center"
                    >
                      {" "}
                      Styll Life
                    </CardTitle>
                    <CardSubtitle className="center" style={spacing}>
                      Styll Life is a collective of artists who share the
                      experience of their Still life moments
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </div>

              <div className="test">
                <Card col-xs="3">
                  <CardImg
                    top
                    style={ImgStyle}
                    width="100%"
                    src={Endgame}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle
                      style={{
                        fontFamily: "Riverside",
                        fontSize: "2.0em",
                        color: "#A788A8"
                      }}
                      tag="h2"
                      className="center"
                    >
                      {" "}
                      End Game: The Game
                    </CardTitle>
                    <CardText style={visiText}>
                      Thanos has done the unthinkable and snapped half of
                      existence away. Can you undo the snap? How will you fix
                      this? Pick your favorite avenger fighter and...
                    </CardText>
                    <CardSubtitle className="center" style={spacing}>
                      <a href="https://reactendgame.herokuapp.com/">
                        <Button className="centerButton">Find out here</Button>
                      </a>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="centerCard">
              <div className="test">
                <Card col-xs="3">
                  <CardImg
                    top
                    width="100%"
                    style={ImgStyle}
                    src={CIPic}
                    alt="Card image cap"
                  />
                  <CardBody className="text-center">
                    <CardTitle
                      style={{
                        fontFamily: "Riverside",
                        fontSize: "2.0em",
                        color: "#00BCD3"
                      }}
                      tag="h2"
                      className="center"
                    >
                      Checkin' In
                    </CardTitle>
                    <CardText style={visiText}>
                      "Checkin' In" is a design for people with Alcohol Use
                      Disorder (AUD) with their recovery process. Users can
                      communicate anonymously with others in recovery, and track
                      individual sobreity progress.
                    </CardText>
                    <Link to="/CheckinIn">
                      <Button className="centerButton">See More</Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>

              <div className="test">
                <Card col-xs="3">
                  <CardImg
                    top
                    style={ImgStyle}
                    width="100%"
                    src={EKPic}
                    alt="Card image cap"
                  />
                  <CardBody className="text-center">
                    <CardTitle
                      style={{
                        fontFamily: "Riverside",
                        fontSize: "2.0em",
                        color: "#6CA8CF"
                      }}
                      tag="h2"
                      className="center"
                    >
                      Escape Key
                    </CardTitle>
                    <CardText style={visiText}>
                      "Escape Key" is a design for women who don't feel safe on
                      college campuses to have a way out of dangerous situations
                      through: escape routes, 911 quick dialing, or send a
                      distress message.
                    </CardText>
                    <Link to="/EscapeKey">
                      <Button className="centerButton">See More</Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1000}>
            <div className="centerCard">
              <div style={mobile}>
                <Card col-xs="5">
                  <CardImg
                    top
                    style={ImgStyle}
                    width="100%"
                    src={comingsoon}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle
                      style={{
                        fontFamily: "Riverside",
                        fontSize: "2.0em"
                      }}
                      tag="h2"
                      className="center"
                    >
                      {" "}
                      Styll Life
                    </CardTitle>
                    <CardSubtitle className="center" style={spacing}>
                      Coming Soon
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="centerCard">
              <div style={mobile}>
                <Card col-xs="5">
                  <CardImg
                    top
                    style={ImgStyle}
                    width="100%"
                    src={Endgame}
                    alt="Card image cap"
                  />
                  <CardBody className="text-center">
                    <CardTitle
                      style={{
                        fontFamily: "Riverside",
                        fontSize: "2.0em",
                        color: "#A788A8"
                      }}
                      tag="h2"
                      className="center"
                    >
                      {" "}
                      End Game(Game)
                    </CardTitle>
                    <CardSubtitle className="center" style={spacing}>
                      <a href="https://reactendgame.herokuapp.com/">
                        <Button className="centerButton">Game Here</Button>
                      </a>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="centerCard">
              <div style={mobile}>
                <Card col-xs="5">
                  <CardImg
                    top
                    width="100%"
                    style={ImgStyle}
                    src={CIPic}
                    alt="Card image cap"
                  />
                  <CardBody className="text-center">
                    <CardTitle
                      style={{
                        fontFamily: "Riverside",
                        fontSize: "2.0em",
                        color: "#6CA8CF"
                      }}
                      tag="h2"
                      className="center"
                    >
                      Checkin' In
                    </CardTitle>
                    <CardText style={visiText}>
                      "Checkin' In" is a design for people with Alcohol Use
                      Disorder (AUD) with their recovery process. Users can
                      communicate anonymously with others in recovery, and track
                      individual sobreity progress.
                    </CardText>
                    <Link to="/CheckinIn">
                      <Button className="centerButton">See More</Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="centerCard">
              <div style={mobile}>
                <Card col-xs="5">
                  <CardImg
                    top
                    style={ImgStyle}
                    width="100%"
                    src={EKPic}
                    alt="Card image cap"
                  />
                  <CardBody className="text-center">
                    <CardTitle
                      style={{
                        fontFamily: "Riverside",
                        fontSize: "2.0em",
                        color: "#00BCD3"
                      }}
                      tag="h2"
                      className="center"
                    >
                      Escape Key
                    </CardTitle>
                    <CardText style={visiText}>
                      "Escape Key" is a design for women who don't feel safe on
                      college campuses to have a way out of dangerous situations
                      through: escape routes, 911 quick dialing, or send a
                      distress message.
                    </CardText>
                    <Link to="/EscapeKey">
                      <Button className="centerButton">See More</Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </div>
          </MediaQuery>
        </div>
      </Fragment>
    );
  }
}
export default Projects;
