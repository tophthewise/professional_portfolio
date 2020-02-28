import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./index.css";

// pages
import Home from "./Pages/Home/Home";
import Musician from "./Pages/Musician/Musician";
import About from "./Pages/About/About";
import Designer from "./Pages/Designer/Designer";
import EscapeKey from "./Pages/EscapeKey/EscapeKey";
import CheckinIn from "./Pages/CheckinIn/CheckinIn";
import Tutoring from "./Pages/Tutoring/Tutoring";
import faq from "./Pages/FAQ/FAQ";
//components
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

// ReactDOM.render(<App />,document.getElementById('root'));
render(
  <BrowserRouter>
    <Fragment>
      <Navigation logoTitle="Eric Porter" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Music" component={Musician} />
        <Route path="/About" component={About} />
        <Route path="/Designer" component={Designer} />
        <Route path="/EscapeKey" component={EscapeKey} />
        <Route path="/CheckinIn" component={CheckinIn} />
        <Route path="/Services" component={Tutoring} />
        <Route path="/FAQ" component={faq} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// ReactDom.render(<App />, document.getElementById('root'));
//Render all compnents in app
