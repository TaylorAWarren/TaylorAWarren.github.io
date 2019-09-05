import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import contactPhoto from '../../images/contactCoverPhoto.jpg'

export default class ContactInfo extends Component {

  render() {
    let boldItalic= {
      fontWeight: 'bold', fontStyle: 'italic'
    }
    let centerItalic = {
      fontStyle: 'italic', textAlign: 'center'
    }

    return (
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={contactPhoto} />
        <Card.Body className="justify-content-center">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row noGutters={true}>
                <Col sm={2} style={boldItalic}>
                  Email:
                </Col>
                <Col sm={{span:6, offset:3}} style={centerItalic}>
                  taylorWarrenCoding<br/>@gmail.com
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row noGutters={true}>
                <Col sm={3} style={boldItalic}>
                  Phone:
                </Col>
                <Col sm={{span:8, offset:1}} style={centerItalic}>
                  (406) - 224 - 2389
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row noGutters={true}>
                <Col sm={3} style={boldItalic}>
                  Github:
                </Col>
                <Col sm={{span:8, offset:1}} style={centerItalic}>
                  <a style={{textDecoration: 'none', color: 'black'}}  target='_blank' href='https://github.com/TaylorAWarren'>TaylorAWarren</a>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row noGutters={true}>
                <Col sm={4} style={boldItalic}>
                  LinkedIn:
                </Col>
                <Col sm={8} style={centerItalic}>
                <a style={{textDecoration: 'none', color: 'black'}}  target='_blank' href='https://www.linkedin.com/in/taylor-warren-a90941183/'>TaylorAWarren</a>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    )
  }
}
