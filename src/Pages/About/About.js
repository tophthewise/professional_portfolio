import React, { Component, Fragment } from "react";
import Headshot from "../../img/Headshot.jpg";
import "../../Components/Navigation/Navigation.css";
import Musician from "../../Components/Musician/Musician";
import Nav from "../../Components/About/aboutNavigation";
import "./About.css";
import logo from "../../img/Sun.svg";
import { Link } from "react-router-dom";

//import './Musician.css';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

class About extends Component {
  render() {
    const profiles = [
      {
        to: "https://www.linkedin.com/in/eric-porter-687aa6122/",
        label: "LinkedIn",
      },
      { to: "mailto:eric.porter820@gmail.com", label: "Contact" },
    ];
    const profile_links = profiles.map((profile) => {
      return (
        <li key={profile.label}>
          <a href={profile.to}>{profile.label}</a>
        </li>
      );
    });
    const startdate = new Date(2018, 5, 11, 0, 0, 0, 0);
    const start_month = startdate.getMonth();
    const start_year = startdate.getFullYear();
    const end_Date = new Date(2019, 5, 24, 0, 0, 0, 0);
    const today_month = end_Date.getMonth();
    const today_year = end_Date.getFullYear();
    var totalMonths = 0;
    function month_diff() {
      const first_year_months = 12 - start_month + 1;
      if (today_year > start_year) {
        var totalMonths = 12 * (today_year - start_year);
        if (today_month < start_month) {
          var month_diff = start_month + 1 - (today_month + 1);
          totalMonths -= month_diff;
        }
        return totalMonths;
      }
    }
    const monthsInMich = month_diff();

    console.log(month_diff());

    return (
      <Fragment>
        <div className="background">
          <div className="center">
            <h1 className="center" style={{ fontFamily: "Riverside" }}>
              About Me
            </h1>
            <img className="center" src={Headshot} />
          </div>

          <Nav
            className="center"
            logoTitle="Cornell University"
            subheader="(BS '17, MS '18)"
          />
          <div className="movein ">
            <p className="cleanspace">
              <span className="innerBlurb">
                <span style={{ fontSize: "60px" }}> Welcome!</span> I am a web
                developer and aspiring designer interested in UX. My experience
                includes Enterprise Architecture work at The Dow Chemical
                Company and Software Engineering at Chevron Corporation. Now I
                am looking to do more hands-on development and design.{" "}
              </span>
            </p>
            <p className="cleanspace">
              <span className="innerBlurb">
                My interests range from the business of the independent musical
                artist to the enablement of financial literacy in young adults
                and digital design in Marketing. Working in the intersection of
                Business and Technology, I hope to influence the changes in
                daily problems using new analytical results from visualizations
                to revolutionize user experiences for all. I am particularly
                fond of Javascript and how it is changing(React, Node, express).
                Working in Industry has shown me how companies are using new
                technologies and might have a tough time getting newer tech
                implemented(being that it is changing daily). This excites me on
                what the future has to hold. REST API's and the advent of
                Node.js is changing the way we see and use the web in a little
                under 10 years.
              </span>
            </p>
            <p className="cleanspace">
              <span className="innerBlurb">
                I was raised in New York State living primarily in Vestal(6
                years) and Poughkeepsie(6 years). While I enjoy New York, I also
                enjoy learning about cultures different than the New Yorker
                lifestyle. Having lived in Michigan and California, for 12 and 4
                months respectively, enriched my experience in learning about
                cultures different from my own. I've been outside of the
                US(Namibia) and hope to do some more traveling to enhance my
                projects, solving different problems through different cultural
                lenses. When not working, I enjoy making
                <a href="https://distrokid.com/hyperfollow/tph12/valentines-day">
                  {" "}
                  {"music"}
                </a>
                , Editing Photos(a recent development) and web development for
                small clients. See my
                <Link to="/Projects"> {"projects"} </Link>, and email me for
                prices.
              </span>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default About;
