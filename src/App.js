import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Profile} from "./components/Profile";

import {Users} from "./components/Users";


function App() {

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row">
          <div className="col-3">
            <Menu/>
          </div>
          <div className="col-9">
            <Route exact path="/profile" render={()=>{return <Profile/>}}/>
            <Route path="/user" render={()=>{return <Profile/>}}/>
            <Route path="/users" render={()=>{return <Users/>}}/>
          </div>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
