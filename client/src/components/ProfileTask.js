import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Message from "../components/Message";

function ProfileTask({ task, setTime, time, user }) {
  const [comment, setComment] = useState([]);
  const [edit, setEdit] = useState(false);
  const [job, setJob] = useState(task.description);
  const [dateUpdate, setDateUpdate] = useState(task.due_by);
  const [cityUpdate, setCityUpdate] = useState(task.city);
  // Date format
  const dueDate = task.due_by.split("-");
  const dateArr = [dueDate[1], dueDate[2], dueDate[0]];
  const date = dateArr.join("-");

  // Comment for each task
  useEffect(() => {
    fetch(`/task_comments/${task.id}`)
      .then((r) => r.json())
      .then((res) => setComment(res));
  }, [time]);

  function handleDelete() {
    fetch(`tasks/${task.id}`, {
      method: "DELETE",
    }).then(setTime(Date()));
  }

  function handleEdit() {
    fetch(`/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: job,
        due_by: dateUpdate,
        city: cityUpdate,
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.id) {
          // if patch success setCurrentUser to response
          setTime(Date());
        } else {
          // if fail alert with errors
          alert(res.errors);
        }
      });
  }

  return (
    <Container className="profile__task__card">
      {/* Edit post */}
      {edit ? (
        <Container className="task__edit_container">
          <Form className="task__form">
            <Col md={6}>
              <FormGroup>
                <Label for="Desc">Job</Label>
                <Input
                  onChange={(e) => setJob(e.target.value)}
                  id="Desc"
                  name="Desc"
                  value={job}
                  type="textarea"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="Date">Due Bye</Label>
                <Input
                  onChange={(e) => setDateUpdate(e.target.value)}
                  id="Date"
                  name="Date"
                  value={dateUpdate}
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input
                  onChange={(e) => setCityUpdate(e.target.value)}
                  id="exampleCity"
                  value={cityUpdate}
                  name="city"
                />
              </FormGroup>
            </Col>
            <Button onClick={handleEdit}>Submit</Button>
          </Form>
        </Container>
      ) : null}
      <Card>
        <button className="profile__button" onClick={handleDelete}>
          X
        </button>
        <button className="edit__button" onClick={() => setEdit(!edit)}>
          Edit
        </button>
        <CardBody>
          Due Date: <b>{date}</b>
          <br />
          Job: {task.description}
          <br />
          City: {task.city}
        </CardBody>
        <CardBody>
          {comment.map((c) => (
            <Message key={c.id} message={c} />
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}

export default ProfileTask;
