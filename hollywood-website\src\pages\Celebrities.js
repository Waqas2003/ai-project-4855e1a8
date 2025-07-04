import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Celebrities() {
  return (
    <div className="celebrities-page">
      <h1>Celebrities</h1>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h2>Celebrity 1</h2>
            <p>Celebrity 1 bio</p>
          </Col>
          <Col xs={12} md={4}>
            <h2>Celebrity 2</h2>
            <p>Celebrity 2 bio</p>
          </Col>
          <Col xs={12} md={4}>
            <h2>Celebrity 3</h2>
            <p>Celebrity 3 bio</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Celebrities;