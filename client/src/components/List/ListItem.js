import React from "react";
import { Container, Row, Col } from "../Grid";

export const ListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="12">
          <h3>{props.title}</h3>
          <p>{props.date}</p>
          <p>{props.synopsis}</p>
          <a href={props.url} className="btn btn-info" rel="noreferrer noopener" target="_blank">
            Link
        </a>
          <button className="btn btn-primary ml-2" data={props.title}>
            Save Article
        </button>
        </Col>
      </Row>
    </Container>
  </li>
);
