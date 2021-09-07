import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  /* //lifecycle method
  componentDidMount() {
    //make component calls here
    fetch("https://jsonplaceholder.typicode.com/users") // fetch data using the fetch API
      .then((res) => res.json()) //when the promise is resolved
      //then we convert the response to a json
      .then((users) => {
        //this gets us the data we need and thats the "users" containing all the users
        console.log("users", users); // thisis the output
        this.setState({ users: users });
      })
      .catch((err) => console.log(err));
  }
*/
  render() {
    return (
      <div>
        <div>
          {this.props.usersdata.map((user) => {
            return (
              <User
                user={user}
                key={user.id}
                deleteuser={this.props.deleteuser}
                updateUser={this.props.updateUser}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
