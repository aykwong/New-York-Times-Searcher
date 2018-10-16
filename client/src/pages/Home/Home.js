import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

class Home extends Component {
  state = {
    article: {}
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                New York Times Searcher
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Home;
