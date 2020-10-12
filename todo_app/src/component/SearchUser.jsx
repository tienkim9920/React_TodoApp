import React, { Component} from 'react';

class SearchUser extends Component{

    state = {
        search: "",
    }

    handlerSearch = (e) => {
        this.setState({
            search: e.target.value
        })

        var { searchUser } = this.props;

        searchUser(this.state)
    }

    // handlerSubmit = (e) => {
    //     e.preventDefault();

    //     var { searchUser } = this.props;

    //     searchUser(this.state)
    // }

    render(){
        return (
            <div className="d-flex justify-content-end">
                <input className="form-control w-25" type="text" name="search" id="search"
                placeholder="Enter Search!" onKeyUp={this.handlerSearch}/>
                <div>&nbsp;</div>
                {/* <button className="btn btn-success" type="submit" onClick={this.handlerSubmit}>Search</button> */}
            </div>
        )
    }

}

export default SearchUser;