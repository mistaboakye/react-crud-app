import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser, deleteUser } from "./Store/userActions";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  //this method adds new users to the users created already by
  // attaching random id numbers with the math below
  addNewUser = (user) => {
    user.id = 100 + Math.random() * 1000;
    this.props.addNewUser(user);
  };

  //this method removes users from the list by their ID
  //by filtering through the list that and identifying
  //the id that does not match the one that needs not be
  // removed
  deleteUser = (id) => {
    this.props.deleteUser(id);
  };

  //this method updates existing users per thier id and
  //adds the new updates to the user
  updateUser = (id, newContactUpdate) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? newContactUpdate : user
      ),
    });
  };
  // });

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
              usersdata={this.props.users}
              deleteuser={this.props.deleteUser}
              updateUser={this.updateUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

//state is passed an a argument which will return
//an object which will map our state to the props
// the argument (state) is the redux state in our reducer
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  addNewUser: addNewUser,
  deleteUser: deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//mapStateToProps - helps you reading stae from the reduc store
//mapDispatchToProps - helps to send data to your redux store
