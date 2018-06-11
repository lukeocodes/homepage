import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => (
  <React.Fragment>
    <Jumbotron fluid>
      <Container>
        <h1 className="display-3">Hello, world!</h1>
        <p>This website is nothing more than a demonstration of how a website can be thrown together and deployed with CI in about an hour.</p>
        <p className="lead">There will probably be a blog at some point!</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
);


export default Home;