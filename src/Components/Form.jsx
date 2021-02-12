import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    city: this.props.cities[0].id,
    language: this.props.languages[0].id,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
        
      this.setState({
        [name]: value,   
      });
    }

  // handleLanguages = (event) => {
  //   console.log(event.target.value);
  //   const { value } = event.target;

  //   for (let i = 0; i < this.state.languages.length; i++) {
  //     if (value === this.state.languages[i]) {

  //       let filteredArray = this.state.languages.filter(
  //         language => language !== value
  //       )
  //       this.setState({languages: filteredArray})
  //       return;
  //     }
  //   }

  //   this.setState((prevState) => ({
  //     languages: [...prevState.languages, value],
  //   }));
  // };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {    
    const { name, city, language } = this.state;
    const { languages, cities } = this.props;

    const languageItems = languages.map((item, index) => {
      return (<option key={index} value={item.id}>{item.name}</option>)
    });

    const cityItems = cities.map((item, index) => {
      return (<option key={index} value={item.id}>{item.name}</option>)
    });

    console.log(this.state)
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
          <select
            className="form-control"
            id="city"
            name="city"
            value={city}
            onChange={this.handleChange}
          >
            {cityItems}
          </select>
        </div>
        {/* <div className="form-group">
          <label htmlFor="phoneNum">Phone number:</label>
          <input
            className="form-control"
            type="text"
            name="phoneNum"
            id="phoneNum"
            value={phoneNum}
            onChange={this.handleChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="language">
            Language:
          </label>
          <select
            className="form-control"
            id="language"
            name="language"
            value={language.id}
            onClick={this.handleChange}
          >
            {languageItems}
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
