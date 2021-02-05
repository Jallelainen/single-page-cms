import React from "react";
//------Bootstrap------
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Details = (person) => {
  const { name, city, country } = person;
    const listItems = person.languages.map((item) => {
      return (<li>{item}</li>)
    });

  return (
    <Container>
      <Row>
        <Col>
          <h2>{name}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>City:</h4>
          <p>{city}</p>
        </Col>
        <Col>
          <h4>Country:</h4>
          <p>{country}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Language(s):</h4>
          <ul>
            {listItems}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Details;
