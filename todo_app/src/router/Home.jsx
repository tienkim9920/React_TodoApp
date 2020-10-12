import React, { Component } from 'react';

import Users from '../component/Users';
import Search from '../component/SearchUser';

import axios from 'axios';

class Home extends Component {

    state = {
        users: [],
        listSearch: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/userAPI')
            .then(res => {
                this.setState({
                    users: res.data,
                    listSearch: res.data
                })
            })
    }

    deleteUser = (id) => {
        var users = this.state.users.filter((user) => {
            return user._id !== id;
        });

        var listUser = this.state.listSearch.filter((user) => {
            return user._id !== id;
        });

        this.setState({
            users: users,
            listSearch: listUser,
        });
    };

    searchUser = (value) => {
        var listUserBanDau = this.state.listSearch;

        if (value.search === "") {
            this.setState({
                users: listUserBanDau,
            });
        }

        var arrListSearch = [];

        for (var i = 0; i < listUserBanDau.length; i++) {
            var getNameUser = listUserBanDau[i].fullname.toUpperCase();
            var valueSearch = value.search.toUpperCase();

            if (getNameUser.indexOf(valueSearch) !== -1) {
                arrListSearch.push(listUserBanDau[i]);
            }
        }

        this.setState({
            users: arrListSearch,
        });
    };

    render() {
        return (
            <div className="manage_User">
                <h1>List User</h1>
                <Search searchUser={this.searchUser}/>
                <br />
                <Users users={this.state.users} deleteUser={this.deleteUser} />
            </div>
        )
    }

}

export default Home