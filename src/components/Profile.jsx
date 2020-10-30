import React from "react";

export class Profile extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: "",
            userAdress:"",
            userRepair:""
        }
    }
    componentDidMount() {
        const formData = new FormData();
        let userId = window.location.pathname.split("/")[2];
        formData.append("userId",userId);
        fetch("http://u96470ux.beget.tech/getUser",{
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