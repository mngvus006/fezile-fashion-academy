import React, { Component } from "react";
import { CourseConsumer } from "../Context";
import { Card, Accordion, Container, Row } from "react-bootstrap";

export default class Course extends Component {
  render() {
    const {
      certificateName,
      id,
      fees,
      times,
      courseType,
      curriculum
    } = this.props.course;
    return (
      <Container style={divStyle}  class="centered">
        <CourseConsumer>
          {value => (
            <Card>
              <Card.Header  as="h5">{certificateName}</Card.Header>
              <Card.Body>
                <Card.Title >{courseType}</Card.Title>
                <Card.Text>{times}</Card.Text>
                <Card.Text><i class="fa fa-money"></i> {fees}</Card.Text>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      view curriculum
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <ul class="list-group list-group-flush">
                          {curriculum.map(x => {
                            return <li class="list-group-item">{x}</li>;
                          })}
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
          )}
        </CourseConsumer>
        </Container>
       
    );
  }
}

var divStyle = {
  padding: "20px",
  
};