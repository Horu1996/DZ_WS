import {NavLink} from "react-router-dom";
import React from "react";
import {bdsmPath} from "../config";

export const Menu = ()=>{
    return <ul>
        <li><NavLink className="nav-link" to={bdsmPath+"/users"}>Пользователи</NavLink></li>
        {/*<li><NavLink className="nav-link" to={"bdsmPath+/profile"}>Профиль</NavLink></li>*/}

    </ul>

}