import React, { Component } from 'react';

import axios from 'axios';

class Update extends Component {

    state = {
        users: []
    }

    componentDidMount(){
        var idUser = this.props.match.params.id
        console.log(idUser)
        axios.get('http://localhost:3000/userAPI/' + idUser)
            .then(res => {
                this.setState({
                    users: res.data,
                })
            })
    }

    render() {
        return (
            <div className="group-addUser">
                <h1>Update User</h1>
                <form className="form-group" onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className="form-control w-50" value={this.state.users.fullname} type="text" id="fullname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Email:</label>
                        <input className="form-control w-50" type="text" value={this.state.users.email} id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input className="form-control w-50" type="text" value={this.state.users.phone} id="phone" />
                    </div>
                    <button className="btn btn-primary" type="submit">Update</button>
                </form>
            </div>
        )
    }

}

export default Update;