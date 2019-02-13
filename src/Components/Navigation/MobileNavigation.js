import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import hambarter from '../../img/Hamburger.png'
class hamburgerMenuPage extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {

  return (
    <MDBContainer style={{marginLeft:'0px',paddingLeft:'0px'}}>
      <MDBNavbar color="light-blue lighten-4" style={{width:'100vw', marginLeft: '0px' }} light>
        <MDBContainer >
          <MDBNavbarBrand >
                  <h3 className="subheader" style={{paddingLeft:'0'}}> Developer & Designer</h3>
          </MDBNavbarBrand>
          <MDBNavbarToggler image = {hambarter}onClick={this.toggleCollapse('navbarCollapse1')}  />
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <NavbarNav left style={{color:'#d7dae0'}}>
              <MDBNavItem active>
                <MDBNavLink style={{color:'#ff7260','textAlign':'center'}} to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink style={{color:'#ff7260','textAlign':'center'}} to="/About">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink style={{color:'#ff7260','textAlign':'center'}} to="/Designer">Projects</MDBNavLink>
              </MDBNavItem>
            </NavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
    );
  }
}

export default hamburgerMenuPage;