import React, { Component } from "react";
import "./App.scss";
//----------BOOTSTRAP----------
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//------------Components----------
import PersonTable from "./Components/PersonTable";
import Form from "./Components/Form";
import Details from "./Components/Details";

class App extends Component {
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  openCreate = () => {
    const { showCreate, showDetails } = this.state;

    if (showCreate === false && showDetails === false){
      this.setState({ showCreate: true, showDetails: false,  createBtn: "Close" });

    } else {
      if(showCreate === true && showDetails === false) {
        this.setState({ showCreate: false, createBtn: "Create Person" });
      } else if (showCreate === false && showDetails === true){
        this.setState({ showCreate: true, showDetails: false,  createBtn: "Close" });
      }
    }
  };

  state = {
    characters: [],
    showCreate: false,
    createBtn: "Create Person",
    showDetails: false,
  };

  render() {
    const { characters, createBtn } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <PersonTable
              characterData={characters}
              removeCharacter={this.removeCharacter}
            />
            <Button variant="primary" onClick={this.openCreate}>
              {createBtn}
            </Button>
          </Col>
        </Row>
        {this.state.showCreate ? (
          <Row>
            <Col>
              <Form handleSubmit={this.handleSubmit} />
            </Col>
          </Row>
        ) : this.state.showDetails ? (
          <Row>
            <Col>
              <Details />
            </Col>
          </Row>
        ) : (
          <Row></Row>
        )}
      </Container>
    );
  }
}

export default App;
