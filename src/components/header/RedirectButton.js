import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

export default withRouter(function RedirectButton(props) {
  let url = `/${props.url}`
  return (
    <Nav.Item>
      <Link to={url}> {props.name}</Link>
    </Nav.Item>
  )
});