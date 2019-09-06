import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import RedirectButton from './RedirectButton'
import Container from 'react-bootstrap/Container'
import './header.css'


class Header extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Container fluid="true" className="navigation">
        <Navbar className='headerNavBar' style={{ backgroundColor: '#15B097' }} expand="sm" variant="dark">
          {/* <Navbar.Brand> Taylor Warren </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" onSelect={selectedKey => this.props.history.push(selectedKey)}>
              <RedirectButton url='' name='Home' />
              <RedirectButton url='resume' name='Resume' />
              <RedirectButton url='about' name='About' />
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text style={{ color: 'rgba(255, 190, 140, 0.6)', fontFamily: "'Raleway', sans-serif", fontWeight: '400' }}>
            Webpage by Taylor Warren
          </Navbar.Text>
        </Navbar>
      </Container >
    )
  }
}

export default withRouter(Header);