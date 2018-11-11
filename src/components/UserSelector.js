import React, { Component } from 'react';
import * as ApiService from '../services/apiService'
import { formatOrganization } from '../utils'

class UserSelector extends Component {
  state = {
    users: ApiService.UsersSource,
    selectedUser: ''
  }

  handleChange = (event) => {
    this.setState({ selectedUser: event.target.value })
  }

  render() {
    return (
      <select value={this.state.selectedUser}
              onChange={this.handleChange}>
        {
         this.state.users.map((current_user) =>
            <option value={formatOrganization(current_user)} key={current_user.id}>{current_user.name}</option>
          )
        }
      </select>
    )
  }
}

export default UserSelector