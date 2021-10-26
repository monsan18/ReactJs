import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleLogin from 'react-google-login';

import { HeaderWrapped } from "./header";
import { useHistory } from "react-router-dom";

export default function Login() {
    let history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async googleData => {  const res = await fetch("/api/v1/auth/google", {
    method: "POST",
    body: JSON.stringify({
    token: googleData.tokenId
  }),
  headers: {
    "Content-Type": "application/json"
  }
})  
const data = await res.json()

  }

  
  const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)


  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
     event.preventDefault();
  }


  return (
    <div className="Login">
      <HeaderWrapped>
        <h2>Login</h2></HeaderWrapped>
      <br/>
      <div  style={{
        position: 'absolute', left: '25%', top: '35%', right: '25%', bottom : '25%',
        transform: 'translate(-15%, -15%, -15%, -15%)'
    }}>
      <h4>Manual Login</h4>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
        </Form.Group>
       
       <br/>
          <div className="d-grid gap-2">
        <Button block size="lg" type="submit" onClick={() => 
                {history.push('/home')}}
        disabled={!validateForm()}>
          Login
        </Button>
     
        <br/>
     
      <GoogleLogin
    clientId={'558851156845-2g7uqkcfn8283jt47sm0gsg2379u5lpj.apps.googleusercontent.com'}
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
 />
        </div>
      </Form>
      </div>
    </div>
  
  );
 
}
