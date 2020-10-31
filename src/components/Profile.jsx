import React from "react";
import {host} from "../config";

export class Profile extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: "",
            userAdress:"",
            userRepair:"",
            userId:""
        }
    }
    componentDidMount() {
        const formData = new FormData();
        const uri = window.location.pathname.split("/");
        const userId = uri[uri.length-1];
        this.setState({userId:userId})
        formData.append("userId",userId);
        fetch(host+"getUser",{
            method: "POST",
            body: formData
        })
            .then((response)=>response.json())
            .then((user)=>{
                this.setState({
                    userName: user.name+" "+user.lastname,
                    userAdress:user.adress,
                    userRepair:user.repair
                })
            });
    }
    render() {
        return <div className="row">
            <div className="col-2">
                <img width="100%" src="https://cdn.pixabay.com/photo/2017/07/24/04/23/technical-support-2533526_1280.png" alt=""/>
            </div>
            <div className="col-10">
                <h1>{this.state.userName}</h1>
                <p>Адрес: {this.state.userAdress}</p>
                <p>Производят ремонт: {this.state.userRepair}</p>
            </div>
        </div>
    }
}