import React, { Component } from "react";
import "./App.scss";
import Container from 'react-bootstrap/Container'
import PersonTable from "./Components/PersonTable";
import Form from './Components/Form'

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
      this.setState({characters: [...this.state.characters, character]})
  }

  state = {
    characters: [],
  };

  render() {
    const { characters } = this.state;

    return (
      <Container>
        <PersonTable
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </Container>
    );
  }
}

export default App;
