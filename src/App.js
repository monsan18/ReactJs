import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Login from "./containers/Login";
import Content from "./containers/Content";
import { HeaderWrapped } from "./containers/header";

import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/login" component ={Login} />
            <Route exact path="/home" component= {Content} />
      </Switch>
    </Router>
  )
}

export default App;