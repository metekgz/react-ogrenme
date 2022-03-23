import React, { Component } from "react";
import User from "./User";

export default class extends Component {
  render() {
    const { users, deleteUser } = this.props;
    return (
      <table className="table caption-top">
        <caption>Kişi listesi</caption>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">İsim</th>
            <th scope="col">Email</th>
            <th scope="col">Kişiyi Sil</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, name, email } = user;

            return (
              <User
                key={id}
                id={id}
                name={name}
                email={email}
                deleteUser={deleteUser}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
