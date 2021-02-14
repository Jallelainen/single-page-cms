import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    city: this.props.cities[0].id,
    language: this.props.languages[0].id,
    formIsValid: false,
    errorMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    
    if (value.length > 2 && value.length < 27) {
      this.setState({
        [name]: value,
        formIsValid: true,
        errorMessage: "",
      });
    }else{
      this.setState({
        [name]: value,
        formIsValid: false,
        errorMessage: "Name needs to be at least 3, and less than 27 characters",
      })
    }

  };

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
    if (this.state.formIsValid) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  };

  render() {
    const { name, city, language, errorMessage } = this.state;
    const { languages, cities } = this.props;

    const languageItems = languages.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });

    const cityItems = cities.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });

    return (
      <form>
        <h4>Create new person</h4>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <span className="errorSpan">{errorMessage}</span>
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
          <label htmlFor="language">Language:</label>
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
            type="submit"
            value="Submit"
            onClick={this.submitForm}
          />
        </div>
      </form>
    );
  }
}

export default Form;
