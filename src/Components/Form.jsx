import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    city: "",
    country: "",
    languages: ["Swedish", "Norweigian"],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
        
      this.setState({
        [name]: value,   
      });
    }

  handleLanguages = (event) => {
    console.log(event.target.value);
    const { value } = event.target;

    for (let i = 0; i < this.state.languages.length; i++) {
      if (value === this.state.languages[i]) {

        let filteredArray = this.state.languages.filter(
          language => language !== value
        )
        this.setState({languages: filteredArray})
        return
      }
    }

    this.setState((prevState) => ({
      languages: [...prevState.languages, value],
    }));
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, city, country, languages } = this.state;
    //const { languages } = this.props.languages;
    const listItems = languages.map((item, index) => {
      return (<option key={index} value={item}>{item}</option>)
    });

    return (
      <form>
        <h4>Create new person</h4>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            className="form-control"
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">
            Language(s)
          </label>
          <select
            multiple
            className="form-control"
            id="language"
            name="language"
            value={languages}
            onClick={this.handleLanguages}
          >
            {listItems}
          </select>
        </div>
        <div className="form-group">
          <input
            className="btn btn-primary"
            type="button"
            value="Submit"
            onClick={this.submitForm}
          />
        </div>
      </form>
    );
  }
}

export default Form;
