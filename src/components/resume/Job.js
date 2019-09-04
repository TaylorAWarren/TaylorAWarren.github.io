import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class Job extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col sm={3}><b>{this.props.employer.employmentPeriod}</b></Col>
          <Col sm={9}><b>Positions Held:</b> <i>{this.props.employer.positionsHeld}</i></Col>
        </Row>
        <Row className="justify-content-center">
          <p className="indented">{this.props.employer.description}</p>
        </Row>
      </Container>
    </div>
    )
  }
}
