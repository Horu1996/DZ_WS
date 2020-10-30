import React from "react";
import {NavLink} from "react-router-dom";

const Tr = (props)=>{
    return <tr>
        <th scope="row">{props.index}</th>
        <td><NavLink to={"user/"+props.userId}>{props.adress}</NavLink></td>
        <td>{props.email}</td>
    </tr>
}

export class Users extends React.Component{
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("http://u96470ux.beget.tech/getUsers")
            .then(response=>response.json())
            .then(users=>{
                let usersArray;
                usersArray = users.map((user,index)=>{
                    return <Tr userId={user.id} adress={user.adress}  index={index+1} email={user.email}/>;
                })
                this.setState({users:usersArray});
            })
    }

    render() {
        return <div>
            <table className="table table-striped">
                <thead >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">E-mail</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users}
                </tbody>
            </table>
        </div>
    }


}