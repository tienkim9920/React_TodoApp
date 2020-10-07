import React, {Component} from 'react';

class Users extends Component{

    render(){

        const { users } = this.props;
        const { deleteUser } = this.props;

        const listUsers = users.map(value => {
            return (
                <div className="users" key={value.id}>
                    <div>Name: {value.name}</div>
                    <div>Age: {value.age}</div>
                    <div>Phone: {value.phone}</div>
                    <button type="submit" onClick={() => {deleteUser(value.id)}}>Delete</button>
                    <br/>
                </div>
            )
        })

        return(
            <div className="list-Users">
                { listUsers }
            </div>
        )
    }

}

export default Users