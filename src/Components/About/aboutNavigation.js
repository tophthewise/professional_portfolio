import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";
import Resume from "../../Files/Resume_Eric_Porter_1_5_2020_DC.pdf";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, fas);

class aboutNav extends Component {
  render() {
    const bigText = { "font-size": "30px", "padding-left": "0" };
    const bigTitle = { "font-size": "40px" };
    const bigHeader = { "font-size": "50px", "font-family": "Riverside" };
    const spacing = { "padding-left": "5px", "font-family": "Riverside" };
    const profiles = [
      {
        to: "https://www.linkedin.com/in/eric-porter-687aa6122/",
        label: "LinkedIn",
        icon: "linkedin",
        icon_pack: "fab"
      },
      {
        to: "https://medium.com/@eric.porter820",
        label: "Medium",
        icon: "medium",
        icon_pack: "fab"
      },
      {
        to: "mailto:eric.porter820@gmail.com",
        label: "Contact",
        icon: "envelope",
        icon_pack: "fas"
      }
    ];
    const profile_links = profiles.map(profile => {
      const icon = [profile.icon_pack, profile.icon];

      return (
        <li key={profile.label} style={spacing}>
          <a href={profile.to} style={bigText}>
            {profile.label + " "}
            <FontAwesomeIcon icon={icon} size="lg" />
          </a>
        </li>
      );
    });
    return (
      <div>
        <nav>
          <ul className="center">
            <li style={{ "font-family": "Riverside" }}>
              <a href={Resume} download="Eric_Porter.pdf" style={bigText}>
                Resume{" "}
                <FontAwesomeIcon icon={["fas", "file-download"]} size="lg" />
              </a>
            </li>
            {profile_links}
          </ul>
        </nav>
        <h2 className="logo" style={bigTitle}>
          {this.props.logoTitle}
        </h2>{" "}
        <h2 className="logo" style={bigTitle}>
          {this.props.subheader}
        </h2>
        {/* make this logoTitle "About Me" */}
      </div>
    );
  }
}

export default aboutNav;
