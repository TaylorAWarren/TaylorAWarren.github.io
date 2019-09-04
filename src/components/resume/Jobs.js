import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import employers from './jobsArray'
import Job from './Job'


export default class Jobs extends Component {
  render() {

    let jobList = employers.map(employer => {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={employer.name}>
            {employer.name}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={employer.name}>
            <Card.Body><Job employer={employer} /></Card.Body>
          </Accordion.Collapse>
        </Card>
      )
    })
    return (
      <div>
        <Accordion>
          {jobList}
        </Accordion>

      </div>
    )
  }
}
