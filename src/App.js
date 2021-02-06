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
    this.setState({ createBtn: "Create Person", showCreate: false  });
  };

  openCreate = () => {
    const { showCreate, showDetails } = this.state;

    if (showCreate === false && showDetails === false){
      this.setState({ showCreate: true, showDetails: false,  createBtn: "Close" });

    } else {
      if(showCreate === true && showDetails === false) {
        this.setState({ showCreate: false, createBtn: "Create Person" });
      } else if (showCreate === false && showDetails === true){
        this.setState({ showDetails: false, showCreate: true,  createBtn: "Close" });
      }
    }
  };

  openDetails = (index) => {
    
    this.setState({ personId: index, showCreate: false, showDetails: true, detailsBtn: "Close", createBtn: "Create Person" })

  };

  closeDetails = () => {
    
    this.setState({ showCreate: false, showDetails: false, detailsBtn: "Show Details", createBtn: "Create Person" })

  };

  state = {
    characters: [],
    showCreate: false,
    createBtn: "Create Person",
    showDetails: false,
    detailsBtn: "Show Details",
    personId: '',
  };

  render() {
    const { characters, createBtn, personId, detailsBtn } = this.state;

    return (
      <Container>
        <Row className="shadow p-4 mb-4 bg-white">
          <Col>
            <PersonTable
              characterData={characters}
              removeCharacter={this.removeCharacter}
              openDetails={this.openDetails}
            />
            <Button variant="primary" onClick={this.openCreate}>
              {createBtn}
            </Button>
          </Col>
        </Row>
        {this.state.showCreate ? (
          <Row className="shadow p-4 mb-4 bg-white">
            <Col>
              <Form handleSubmit={this.handleSubmit} />
            </Col>
          </Row>
        ) : this.state.showDetails ? (
          <Row className="shadow p-4 mb-4 bg-white">
            <Col>
              <Details 
              person={characters[personId]}
              detailsBtn={detailsBtn}
              closeDetails={this.closeDetails}/>
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
