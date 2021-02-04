import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
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
          <label htmlFor="job">Job</label>
          <input
            className="form-control"
            type="text"
            name="job"
            id="job"
            value={job}
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
            values={country}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language (ctrl + click to select more than one)</label>
          <select multiple class="form-control" id="language" name="language">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
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
