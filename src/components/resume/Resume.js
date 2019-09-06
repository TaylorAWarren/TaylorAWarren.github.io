import React, { Component } from 'react'
import Jobs from './Jobs'
import ContactInfo from './ContactInfo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Resume extends Component {
  render() {
    return (
      <div style={{ width: '98%', margin: 'auto' }}>
        <Row noGutters={true}>
          <Col sm={3}>
            <ContactInfo />
          </Col>
          <Col>
            <Jobs />
          </Col>
        </Row>
      </div>
    )
  }
}
