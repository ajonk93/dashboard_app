import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
   } from 'reactstrap';


  class AppNavbar extends Component{
        

    render() {
        return(
            <div><Navbar color = "light"  light   className ="mb-5">
                <Container>
                    <NavbarBrand>Dashboard App</NavbarBrand>
                    
                        <Nav className = "ml-auto" navbar>
                        <NavItem>
              <NavLink href="/components/">Refresh</NavLink>
            </NavItem>
                        </Nav>
                    
                </Container>
            </Navbar>    
        </div>
        )}
    
    }
  

//this.toggle = this.toggle.bind(this); //for custom method in constructor

export default AppNavbar;