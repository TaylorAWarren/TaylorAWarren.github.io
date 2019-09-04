import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

export default withRouter(function RedirectButton(props) {
  let url = `/${props.url}`
  return (
    // <LinkContainer to={url}>
    <Nav.Item>
      <Nav.Link eventKey={url} > {props.name} </Nav.Link>
    </Nav.Item>
    // </LinkContainer>
  )
});