import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/not-found-2.jpg';

const NotFound = () => (
  <Container>
    <Row>
      <Col sm="6" md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 2 }}><img src={notFoundImg} alt="Oops! Not found!" style={{ width: '100%' }} /></Col>
      <Col sm="6" md={{ size: 5 }} lg={{ size: 4 }} className="text-center" style={{ 'paddingTop': '10%' }}>
        <h1>Oops!</h1>
        <h2>Not found</h2>
        <p>The page you were after cannot be found.</p>
        <Button outline color="info" tag={Link} to="/">Click here to go home.</Button>
      </Col>
    </Row>
  </Container>
);


export default NotFound;