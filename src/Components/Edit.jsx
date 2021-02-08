import React, { Component } from "react";
//-----------Bootstrap------------
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Edit extends Component {
  state = {
    name: this.props.person.name,
    city: this.props.person.city,
    country: this.props.person.country,
    languages: this.props.person.languages,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleLanguages = (event) => {
    const { value } = event.target;
    const { languages } = this.state;

    for (let i = 0; i < languages.length; i++) {
      if (value === languages[i]) {
        let filteredArray = languages.filter((language) => language !== value);
        this.setState({ languages: filteredArray });
        return;
      }
    }

    this.setState((prevState) => ({
      languages: [...prevState.languages, value],
    }));
  };

  submitForm = () => {
    const { personId } = this.props;
    this.props.editSubmit(this.state, personId);
    this.props.openDetails(personId);
  };

  render() {
    console.log(this.state);
    const { name, city, country, languages } = this.state;

    return (
      <form>
        <div className="form-row">
          <Col>
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            <label htmlFor="city">City</label>
            <input
              className="form-control"
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={this.handleChange}
            />
          </Col>
        </div>
        <div className="form-row">
          <Col>
            <label htmlFor="country">Country</label>
            <input
              className="form-control"
              type="text"
              name="country"
              id="country"
              value={country}
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            <label htmlFor="language">Language(s)</label>
            <select
              multiple
              className="form-control"
              id="language"
              name="language"
              value={languages}
              onClick={this.handleLanguages}
            >
              <option value="Swedish">Swedish</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Finnish">Finnish</option>
              <option value="Arabic">Arabic</option>
              <option value="Urdu">Urdu</option>
            </select>
          </Col>
        </div>
        <div className="form-row">
          <Col>
            <Button onClick={this.submitForm}>Save</Button>
          </Col>
        </div>
      </form>
    );
  }
}

export default Edit;
