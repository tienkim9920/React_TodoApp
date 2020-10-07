import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './component/Users.jsx';
import AddUser from './component/AddUser.jsx';

class App extends Component{

  state = {
    users: [
      {id: "1", name: "Nguyen Kim Tien", age: "23", phone: "0763557366"},
      {id: "2", name: "Le Thi Thuy Linh", age: "21", phone: "078491574"},
      {id: "3", name: "Nguyen Quoc Toan", age: "26", phone: "028088867"},
    ]
  }

  addUser = (user) => {
    user.id = Math.random();
    var users = [...this.state.users, user];
    this.setState({
      users: users
    })
  }

  deleteUser = (id) => {
    var users = this.state.users.filter(user => {
      return user.id !== id
    })

    this.setState({
      users: users
    })
  }

  render(){
    return (
      <div className="App">
        <div className="App-Content">
          <h1>List Users</h1>
          <Users users={this.state.users} deleteUser={this.deleteUser}/>
          <AddUser addUser={this.addUser}/>
        </div>
      </div>
    )
  }

}

export default App;
