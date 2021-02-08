import React from "react";
//------Bootstrap------
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

const Details = (props) => {
  const { name, city, country, languages } = props.person;
  const { detailsBtn, personId } = props; 
  const listItems = languages.map((item, index) => {
      return (<li key={index}>{item}</li>)
    });

  return (
    <Container>
      <Row>
        <Col className="shadow-sm p-4 mb-4 bg-white">
          <h2>{name}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>City:</h5>
          <p>{city}</p>
        </Col>
        <Col>
          <h5>Country:</h5>
          <p>{country}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Language(s):</h5>
          <ul>
            {listItems}
          </ul>
        </Col>
        <Col>
            <Button className="mr-2" variant="secondary" onClick={() => props.openEdit(personId)}>Edit</Button>
            <Button onClick={() => props.closeDetails()}>{detailsBtn}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
