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
        <Navbar bg="dark" expand="sm" variant="dark">
          <Navbar.Brand> Taylor Warren's Resume </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" onSelect={selectedKey => this.props.history.push(selectedKey)}>
              <RedirectButton url='' name='Home' />
              <RedirectButton url='resume' name='Resume' />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default withRouter(Header);