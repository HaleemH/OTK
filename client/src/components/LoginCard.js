import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";

function LoginCard({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [view, setView] = useState(true)


  let login= {
    email, 
    password,
  }

  function signIn() {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.username) {
          //if success setCurrentUser to response
          setUser(res);
        } else {
          //if fail alert errors
          alert(res.errors);
        }
      });

  }

  function signUp() {
    let signUp ={
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      password,
      password_confirmation: password,
    }
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUp),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.username) {
          //if success setCurrentUser to response
          setUser(res);
          console.log(res)
        } else {
          //if fail alert errors
          alert(res.errors);
        }
      });

  
  }
 
  return (
    <Container className="form__container">
      {view ? (
        <Form className="form__login">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button onClick={signIn} className="login__button">
            Sign In
          </Button>
          <Button onClick={() => setView(false)} className="signup__button">
            Sign Up
          </Button>
        </Form>
      ) : (
        <Form className="form__signup">
          <h3>Create an account</h3>
          <FormGroup>
            <Label for="first name">First Name</Label>
            <Input
              id="firstname"
              name="firstname"
              type="name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="last name">Last Name</Label>
            <Input
              id="lastname"
              name="lastname"
              type="name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="user name">Username</Label>
            <Input
              id="username"
              name="username"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button onClick={() => setView(!view)} className="login__button">Sign In</Button>
          <Button onClick={signUp} className="login__button">
            Sign Up
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default LoginCard;
