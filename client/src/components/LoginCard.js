import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";

function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  console.log(`Loged in as: ${username} with the pword of: ${password}`)
  return (
    <Container className="form__container">
      
      <Form className="form__login">
       
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            onChange={(e) => setUsername(e.target.value)}
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
        <Button className="login__button">Sign In</Button>
        <Button className="signup__button">Sign Up</Button>
      </Form>
    </Container>
  );
}

export default LoginCard;
