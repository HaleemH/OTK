import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Button,
  Col,
  Container,
} from "reactstrap";

function NewTask({user}) {
  const [job, setJob] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit() {
    let task = {
      description: job,
      due_by: date,
      city,
      user_id: user.id,
      vendor_id: 1,
    };
    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((r) => r.json())
      .then((res) => {
        if (!res.description) {
          alert(res.errors);
        }
      });
  }

  return (
    <Container className="new__task__container">
      <Form className="task__form">
        <Col md={6}>
          <FormGroup>
            <Label for="Desc">Job</Label>
            <Input
              onChange={(e) => setJob(e.target.value)}
              id="Desc"
              name="Desc"
              type="textarea"
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="Date">Due Bye</Label>
            <Input
              onChange={(e) => setDate(e.target.value)}
              id="Date"
              name="Date"
              type="date"
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input
              onChange={(e) => setCity(e.target.value)}
              id="exampleCity"
              name="city"
            />
          </FormGroup>
        </Col>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

export default NewTask;
