import React, { Component } from "react";
import peopleService from './API/PeopleService'
import "./App.scss";
//----------BOOTSTRAP----------
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//------------Components----------
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PersonTable from "./Components/PersonTable";
import Form from "./Components/Form";
import Details from "./Components/Details";
import Edit from "./Components/Edit";

class App extends Component {

  state = {
    characters: [],
    languages: [],
    showCreate: false,
    createBtn: "Create Person",
    showDetails: false,
    detailsBtn: "Show Details",
    showEdit: false,
    personId: 0,
  };

  async componentDidMount() {
    let peopleAndLanguages = await peopleService.getAll();
    console.log("componentDidMount", peopleAndLanguages);
    this.setState({
      characters: peopleAndLanguages.peopleList,
      languages: peopleAndLanguages.Languages
    })
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = async (character) => {
    // console.log(character)
    // let newPerson = await peopleService.createPerson(character);
    // let peopleList = await peopleService.getAll();

    // console.log("response: ", newPerson)
    // this.setState({
    //     characters: peopleList,
    //     showCreate: false,
    //     createBtn: "Create Person"
    // })
    var data = JSON.stringify(character);
    console.log(data);

    this.setState({ characters: [...this.state.characters, character] });
    this.setState({ createBtn: "Create Person", showCreate: false });
  };

  editSubmit = (newCharacter, personId) => {
    this.setState(this.state.characters.splice(personId, 1, newCharacter));
  };

  openCreate = () => {
    const { showCreate, showDetails } = this.state;

    if (showCreate === false && showDetails === false) {
      this.setState({
        showCreate: true,
        showDetails: false,
        createBtn: "Close",
      });
    } else {
      if (showCreate === true && showDetails === false) {
        this.setState({
          showCreate: false,
          showEdit: false,
          createBtn: "Create Person",
        });
      } else if (showCreate === false && showDetails === true) {
        this.setState({
          showDetails: false,
          showCreate: true,
          showEdit: false,
          createBtn: "Close",
        });
      }
    }
  };

  openDetails = (index) => {
    this.setState({
      personId: index,
      showCreate: false,
      showDetails: true,
      detailsBtn: "Close",
      createBtn: "Create Person",
    });
  };

  closeDetails = () => {
    this.setState({
      showCreate: false,
      showDetails: false,
      showEdit: false,
      createBtn: "Create Person",
    });
  };

  openEdit = (index) => {
    this.setState({ personId: index, showDetails: false, showEdit: true });
  };


  render() {
    const { characters, createBtn, personId, detailsBtn, languages } = this.state;

    return (
      <Container fluid>
        <Header />
        <Container>
          <Row className="shadow p-4 mb-4 bg-white">
            <Col>
            <h4>Person index:</h4>
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
                <Form 
                handleSubmit={this.handleSubmit} 
                languages={languages}/>
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
                  openEdit={this.openEdit}
                />
              </Col>
            </Row>
          ) : this.state.showEdit ? (
            <Row className="shadow p-4 mb-4 bg-white">
              <Col>
                <Edit
                  person={characters[personId]}
                  languages={this.languages}
                  personId={personId}
                  openDetails={this.openDetails}
                  editSubmit={this.editSubmit}
                />
              </Col>
            </Row>
          ) : (
            <Row></Row>
          )}
        </Container>
        <Footer/>
      </Container>
    );
  }
}

export default App;
