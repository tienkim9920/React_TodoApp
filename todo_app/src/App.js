import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from './router/Home.jsx';
import Update from './router/Update.jsx';


class App extends Component {
  // state = {
  //   users: [
  //     { id: "1", name: "Nguyen Kim Tien", age: "23", phone: "0763557366" },
  //     { id: "2", name: "Le Thi Thuy Linh", age: "21", phone: "078491574" },
  //     { id: "3", name: "Nguyen Quoc Toan", age: "26", phone: "028088867" },
  //   ],
  //   listSearch: [
  //     { id: "1", name: "Nguyen Kim Tien", age: "23", phone: "0763557366" },
  //     { id: "2", name: "Le Thi Thuy Linh", age: "21", phone: "078491574" },
  //     { id: "3", name: "Nguyen Quoc Toan", age: "26", phone: "028088867" },
  //   ],
  // };

  // addUser = (user) => {
  //   user.id = Math.random();
  //   var users = [...this.state.users, user];
  //   this.setState({
  //     users: users,
  //     listSearch: users,
  //   });
  // };

  // deleteUser = (id) => {
  //   var users = this.state.users.filter((user) => {
  //     return user.id !== id;
  //   });

  //   var listUser = this.state.listSearch.filter((user) => {
  //     return user.id !== id;
  //   });

  //   this.setState({
  //     users: users,
  //     listSearch: listUser,
  //   });
  // };

  // searchUser = (value) => {
  //   var listUserBanDau = this.state.listSearch;

  //   if (value.search === "") {
  //     this.setState({
  //       users: listUserBanDau,
  //     });
  //   }

  //   var arrListSearch = [];

  //   for (var i = 0; i < listUserBanDau.length; i++) {
  //     var getNameUser = listUserBanDau[i].name.toUpperCase();
  //     var valueSearch = value.search.toUpperCase();

  //     if (getNameUser.indexOf(valueSearch) !== -1) {
  //       arrListSearch.push(listUserBanDau[i]);
  //     }
  //   }

  //   this.setState({
  //     users: arrListSearch,
  //   });
  // };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="App-Content">

            <Route exact path='/' component={Home} />
            <Route path='/update/:id' component={Update}/>

            {/* <h1>List Users</h1>
            <div className="cpn_Search">
              <SearchUser searchUser={this.searchUser} />
            </div>
            <Users users={this.state.users} deleteUser={this.deleteUser} />
            <Route exact path='/update' component={UpdateUser}/>
            <AddUser addUser={this.addUser} /> */}

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
