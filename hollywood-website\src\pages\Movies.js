import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Movies() {
  return (
    <div className="movies-page">
      <h1>Movies</h1>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h2>Movie 1</h2>
            <p>Movie 1 description</p>
          </Col>
          <Col xs={12} md={4}>
            <h2>Movie 2</h2>
            <p>Movie 2 description</p>
          </Col>
          <Col xs={12} md={4}>
            <h2>Movie 3</h2>
            <p>Movie 3 description</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Movies;