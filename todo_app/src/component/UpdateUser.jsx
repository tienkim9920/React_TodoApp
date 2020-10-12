import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="group-addUser">
                <h1>Update User</h1>
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