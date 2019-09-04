import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import RedirectButton from './RedirectButton'

class Header extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <RedirectButton url='' name='Home' />
              <RedirectButton url='resume' name='Resume' />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default withRouter(Header);