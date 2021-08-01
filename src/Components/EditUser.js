import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      country: "",
      password: "",
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="contaier form">
            <div className="row">
              <div>
                <label>User Name</label>
                <input
                  value={this.state.name}
                  type="text"
                  placeholder="Kingsley Boakye"
                  name="name"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <label>Email</label>
                <input
                  value={this.state.email}
                  type="email"
                  placeholder="mista@boakye.com"
                  name="email"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <label>Country</label>
                <input
                  value={this.state.country}
                  type="text"
                  placeholder="Ghana"
                  name="country"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <label>Password</label>
                <input
                  value={this.state.password}
                  type="password"
                  placeholder="***********"
                  name="password"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
