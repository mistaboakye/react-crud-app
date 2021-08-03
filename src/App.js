import React, { Component } from "react";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  //this adds new users to the users created already by
  // attaching random id numbers with the math below
  addNewUser = (user) => {
    user.id = 100 + Math.random() * 1000;
    this.setState({
      users: [...this.state.users, user],
    });
  };

  //this method removes users from the list by their ID
  //by filtering through the list that and identifying
  //the id that does not match the one that needs not be
  // removed
  deleteUser = (id) => {
    let newUser = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: newUser });
  };

  updateUser = (id, newContactUpdate) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? newContactUpdate : user
      ),
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <h1>Sign Up Form</h1>
            <AddUser addUser={this.addNewUser} />
          </div>
          <h1> Users</h1>
          <div className="col-md-10">
            <Users
              usersdata={this.state.users}
              deleteuser={this.deleteUser}
              updateUser={this.updateUser}
            />
          </div>
        </div>
      </div>
    );
  }
}
