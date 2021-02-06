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
import Edit from './Components/Edit'

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

  editSubmit = (character) => {

  }

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
    this.setState({ showCreate: false, showDetails: false, createBtn: "Create Person" })

  };

  openEdit = (index) => {
    this.setState({ personId: index, showDetails: false, showEdit: true })
  }

  state = {
    characters: [],
    showCreate: false,
    createBtn: "Create Person",
    showDetails: false,
    detailsBtn: "Show Details",
    showEdit: false,
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
              personId={personId}
              detailsBtn={detailsBtn}
              closeDetails={this.closeDetails}
              openEdit={this.openEdit}/>
            </Col>
          </Row>
        ) : this.state.showEdit ? (
          <Row>
            <Col>
              <Edit
              person={characters[personId]}
              editSubmit={this.editSubmit}
              />
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
