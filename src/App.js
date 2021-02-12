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
    cities: [],
    person:[],
    showCreate: false,
    createBtn: "Create Person",
    showDetails: false,
    detailsBtn: "Show Details",
    showEdit: false,
    personId: 0,
  };

  async componentDidMount() {
    let peopleCitiesAndLanguages = await peopleService.getAll();
    console.log("componentDidMount", peopleCitiesAndLanguages);
    this.setState({
      characters: peopleCitiesAndLanguages.peopleList,
      languages: peopleCitiesAndLanguages.languages,
      cities: peopleCitiesAndLanguages.cities,
    })
  }

  removeCharacter = async (index) => {
    let removed = await peopleService.deletePerson(index);
    console.log(removed)

    if (removed){
      let peopleAndLanguages = await peopleService.getAll();
      console.log("Success")
    this.setState({
      characters: peopleAndLanguages.peopleList,
      languages: peopleAndLanguages.languages
    })
    }

    // const { characters } = this.state;

    // this.setState({
    //   characters: characters.filter((characters, i) => {
    //     return i !== index;
    //   }),
    // });
  };

  handleSubmit = async (character) => {
    console.log(character)
    let newPerson = await peopleService.createPerson(character);
    let peopleAndLanguages = await peopleService.getAll();

    console.log("response: ", newPerson)
    this.setState({
        characters: peopleAndLanguages.peopleList,
        showCreate: false,
        createBtn: "Create Person"
    })

    // this.setState({ characters: [...this.state.characters, character] });
    // this.setState({ createBtn: "Create Person", showCreate: false });
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

  openDetails = async (index) => {
    let fetchedPerson = await peopleService.getPerson(index);
    console.log(fetchedPerson)

    this.setState({
      personId: index,
      person: [fetchedPerson],
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
    const { 
      characters, 
      languages,
      cities, 
      createBtn,
      personId, 
      detailsBtn, 
      person 
    } = this.state;

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
                languages={languages}
                cities={cities}/>
              </Col>
            </Row>
          ) : this.state.showDetails ? (
            <Row className="shadow p-4 mb-4 bg-white">
              <Col>
                <Details
                  person={person[0]}
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
