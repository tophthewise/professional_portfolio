import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  






  render() {
    const sections = [
      {to:'/',label:'Home'},
      {to:'/Music' ,label:'Music'},
      {to:'/About', label:'About'},
      {to:'/Designer',label:'Designer'}
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
        <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>  
        <ul>
            {navlinks}
        </ul>
            </nav>
                <h3 className="subheader"> Developer,Designer,Musician</h3>

      </div>
      
    );
  }
}

export default Navigation;
