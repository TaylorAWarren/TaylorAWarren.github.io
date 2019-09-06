import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import contactPhoto from '../../images/contactCoverPhoto.jpg'

export default class ContactInfo extends Component {

  render() {
    let boldItalic = {
      fontWeight: 'bold', fontStyle: 'italic', fontSize: '.75em'
    }
    let centerItalic = {
      fontStyle: 'italic', textAlign: 'center', fontSize: '.5em'
    }

    return (
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={contactPhoto} />
        <Card.Body className="justify-content-center">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row noGutters={true}>
                <Col sm={4} style={boldItalic}>
                  Email
                </Col>
                <Col sm={{ span: 6, offset: 2 }} style={centerItalic}>
                  taylorWarren<br />Coding<br />@gmail.com
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row noGutters={true}>
                <Col sm={4} style={boldItalic}>
                  Phone
                </Col>
                <Col sm={{ span: 7, offset: 1 }} style={centerItalic}>
                  (406) -<br /> 224 - 2389
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row noGutters={true}>
                <Col sm={5} style={boldItalic}>
                  Github
                </Col>
                <Col sm={{ span: 6, offset: 1 }} style={centerItalic}>
                  <a style={{ textDecoration: 'none', color: 'black' }} target='_blank' href='https://github.com/TaylorAWarren'>TaylorAWarren</a>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row noGutters={true}>
                <Col sm={5} style={boldItalic}>
                  LinkedIn
                </Col>
                <Col sm={7} style={centerItalic}>
                  <a style={{ textDecoration: 'none', color: 'black' }} target='_blank' href='https://www.linkedin.com/in/taylor-warren-a90941183/'>TaylorAWarren</a>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    )
  }
}
