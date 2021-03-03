import React from 'react';
import {Row,Col, Container} from 'react-bootstrap'
import Media from '../../Media/Media';
const Layout = () => {
    return (
        <Container className = "mt-5">
              <Row>
                    <Col xs={6} md={4}>
                        <Media />
                    </Col>
                    <Col xs={6} md={4}>
                    <Media />
                    </Col>
                    <Col xs={6} md={4}>
                    <Media />
                    </Col>
                </Row>
        </Container>
    );
};

export default Layout;