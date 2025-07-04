import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function News() {
  return (
    <div className="news-page">
      <h1>News</h1>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h2>News Article 1</h2>
            <p>News Article 1 content</p>
          </Col>
          <Col xs={12} md={4}>
            <h2>News Article 2</h2>
            <p>News Article 2 content</p>
          </Col>
          <Col xs={12} md={4}>
            <h2>News Article 3</h2>
            <p>News Article 3 content</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default News;