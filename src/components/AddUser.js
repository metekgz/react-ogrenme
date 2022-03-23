import React, { Component } from "react";

export default class AddUser extends Component {
  state = {
    name: "",
    email: "",
  };
  onNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onEmailChange(e) {
    this.setState({
      [e.target.email]: e.target.value,
    });
  }
  onAddSubmit(e) {
    const { AddUser } = this.props;
    const { name, email } = this.state;
    const newUser = {
      id: Math.random(),
      name: name,
      email: email,
    };
    AddUser(newUser);
    e.preventDefault();
  }
  render() {
    const { name, email } = this.state;
    return (
      <div className="card">
        <h4 className="card-header">Kişi Ekle</h4>
        <div className="card-body">
          <form onSubmit={this.onAddSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="name">İsim</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Adınız"
                className="form-control"
                value={name}
                onChange={this.onNameChange.bind(this)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={this.onEmailChange.bind(this)}
              ></input>
            </div>
            <button type="submit" className="btn btn-danger btn-block">
              Kişiyi Ekle
            </button>
          </form>
        </div>
      </div>
    );
  }
}
