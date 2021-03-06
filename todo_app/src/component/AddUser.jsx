import React, { Component } from 'react';

class AddUser extends Component {

    state = {
        name: "",
        age: "",
        phone: ""
    }

    handlerChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handlerSubmit = (e) => {
        e.preventDefault();

        const { addUser } = this.props;
        addUser(this.state);
    }

    render() {
        return (
            <div className="group-addUser">
                <form className="form-group" onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className="form-control w-50" type="text" id="name" onChange={this.handlerChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input className="form-control w-50" type="text" id="age" onChange={this.handlerChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input className="form-control w-50" type="text" id="phone" onChange={this.handlerChange} />
                    </div>
                    <button className="btn btn-primary" type="submit">Add User</button>
                </form>
            </div>
        )
    }

}

export default AddUser;