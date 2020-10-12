import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {

    render() {

        const { users } = this.props;
        const { deleteUser } = this.props;

        const listUsers = users.map(value => {
            return (
                <tr key={value._id}>
                    <td>{value.fullname}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>
                        <Link className="btn btn-success" to={"/update/" + value._id}>Update</Link>
                        &nbsp;
                        <button className="btn btn-danger" type="submit" onClick={() => { deleteUser(value._id) }}>Delete</button>
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Users