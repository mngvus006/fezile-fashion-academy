/*import React, { Component } from 'react'
import { CourseConsumer } from "../Context";

export default class Modal extends Component {
    render() {
        return (
            <CourseConsumer>
            {value => {
              const { modalOpen, closeModal } = value;
              const { certificateName, duration, fees,discountInfo,times , curriculum, technicalSamples} = value.courseModal;
    
              if (!modalOpen) {  //conditional rendering of the model
                return null;
              } else {
                return (
             
                    <div >
                          <p>{certificateName}</p>
                          <p>{duration}</p>
                          <p>{fees}</p>
                          <p>{discountInfo}</p>
                          <p>{times}</p>
                        </div>
                 
                );
              }
            }}
          </CourseConsumer>
        )
    }
}*/

import { Card, Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react'
import { CourseConsumer } from "../Context";
import Modal from 'react-bootstrap/Modal'

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}