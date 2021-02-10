import React from "react";
//------Bootstrap------
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

const Details = (props) => {
  console.log(props.person.languages)
  const { id, name, phoneNum, city } = props.person;
  const { detailsBtn } = props; 
  const listItems = props.person.languages.map((item, index) => {
      return (<li key={index}>{item.language.name}</li>)
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
          <h5>Phone Number:</h5>
          <p>{phoneNum}</p>
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
            <Button className="mr-2" variant="secondary" onClick={() => props.openEdit(id)}>Edit</Button>
            <Button onClick={() => props.closeDetails()}>{detailsBtn}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
