import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: "Mete Karagöz",
          email: "mete@gmail.com",
        },
        {
          id: 2,
          name: "Aylin Aslım",
          email: "aylin@gmail.com",
        },
        {
          id: 3,
          name: "Efe Ardıç",
          email: "efe@gmail.com",
        },
      ],
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.AddUser = this.AddUser.bind(this);
  }
  AddUser(newUser) {
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers,
    });
  }
  deleteUser(id) {
    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter((user) => user.id !== id);
    this.setState({
      users: updatedUsers,
    });
  }
  render() {
    return (
      <div className="container">
        <h2>React Öğrenme</h2>
        <hr />
        <AddUser AddUser={this.AddUser} />
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}
