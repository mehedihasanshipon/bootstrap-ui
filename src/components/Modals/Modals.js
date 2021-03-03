import React,{useState} from 'react';
import {Button,Modal,Container,Row,Col} from 'react-bootstrap'



const Modals = () => {
    function MydModalWithGrid(props) {
        return (
              <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                <Container>
                    <Row>
                    <Col xs={12} md={8}>
                        .col-xs-12 .col-md-8
                    </Col>
                    <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                    </Col>
                    </Row>
        
                    <Row>
                    <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                    </Col>
                    <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                    </Col>
                    <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                    </Col>
                    </Row>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
          
        );
      }
    const [modalShow, setModalShow] = useState(false);
    return (
        
            <Container className = "mt-5">
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch modal with grid
        </Button>

        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
        
    );
};

export default Modals;