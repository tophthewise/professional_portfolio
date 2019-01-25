import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Navigation/Navigation.css';
import Resume from '../../Files/Resume_Eric_Porter_12_18_2018.pdf';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab,fas);

class aboutNav extends Component {
  






  render() {
    const bigText={'font-size':'20px'};
    const bigTitle={'font-size':'40px'};
    const profiles = [
      {to:'https://www.linkedin.com/in/eric-porter-687aa6122/',label:'LinkedIn',icon:'linkedin',icon_pack:'fab'},
      {to:'mailto:eric.porter820@gmail.com' ,label:"Contact",icon:'envelope',icon_pack:'fas'},
     
    ];
    const profile_links = profiles.map(profile => {
              const icon = [profile.icon_pack, profile.icon];

      return (
                <li key ={profile.label}>
                  <a href={profile.to} style={bigText}>
                      {profile.label+" "}  
                      <FontAwesomeIcon icon ={icon} size="lg"/>
                  </a>
                </li>
        )

    });
    return (

      <div>
       

        <nav>

	        <ul className = "center">
	        <li><a href={Resume} download="Eric_Porter.pdf" style={bigText} >
          {"Resume "}
          <FontAwesomeIcon icon={['fas','file-download']}size="lg"/>
          </a></li>
	            {profile_links}
	        </ul>

        </nav>
 <h2 className="logo" style={bigTitle}>{this.props.logoTitle}</h2> {/* make this logoTitle "About Me" */}
      </div>
      
    );
  }
}

export default aboutNav;
