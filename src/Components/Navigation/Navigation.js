import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import MobileFriendlyNav from './MobileNavigation'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
library.add(fas);

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    
    const sections = [
      {to:'/',label:'Home'},
      {to:'/About', label:'About'},
      {to:'/Designer',label:'Designs'}
    ];
    const navlinks = sections.map(section => {
      return (
                <li key ={section.label}>
                <Link to={section.to}>{section.label}  
                </Link>
                </li>

        )

    });


    return (

      <div>
      <MediaQuery minWidth={1224}>

        <nav>
                <h2 className="logo">{this.props.logoTitle}</h2>  

            <ul>
                {navlinks}
            </ul>
                    </nav>
                <h3 className="subheader"> Developer & Designer</h3>

           </MediaQuery>

          <MediaQuery maxWidth={1220}>
                  <h2 className="logo">{this.props.logoTitle}</h2>  

                    <MobileFriendlyNav/>

                </MediaQuery> 

      </div>
      
    );
  }
}

export default Navigation;
