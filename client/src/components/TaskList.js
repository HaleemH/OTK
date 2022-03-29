import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Col,
} from "reactstrap";
function TaskList({ desc, due, user, id, city, currentUser,setRefreshList }) {
  const [comments, setComments] = useState(false);
  const [edit, setEdit] = useState(false);
  const [job, setJob] = useState(desc);
  const [dateUpdate, setDateUpdate] = useState(due);
  const [cityUpdate, setCityUpdate] = useState(city);
  const [message, setMessage] = useState("");
  // format date to be more readable

  const dueDate = due.split("-");
  const dateArr = [dueDate[1], dueDate[2], dueDate[0]];
  const date = dateArr.join("-");

  // Send Message
  function handleSubmit() {
    let data = {
      user_id: currentUser.id,
      comment: message,
      task_id: id,
    };
    fetch("/task_comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((res) => {
        if (!res.id) {
          alert(res.errors);
        }
      })
      .then(refresh());
  }
  function handleEdit() {
      fetch(`/tasks/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              description: job,
              due_by: dateUpdate,
              city: cityUpdate,
              user_id: user.id,
              vendor_id: 1,
          })
      }).then((r) => r.json())
      .then((res) => {
        if (res.id) {
          // if patch success setCurrentUser to response
         refresh()
        } else {
          // if fail alert with errors
          alert(res.errors);
        }
      });
  }
  function handleDelete(){
      fetch(`tasks/${id}`, {
          method: "DELETE",
      }).then(refresh())

  }
  function refresh() {
    setMessage("");
    setComments(false);
    setEdit(false)
    setRefreshList(Date.now());
  }
  return (
    <div className="task__container">
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
            <Button onClick={handleDelete}>Delete</Button>
          </Form>
        </Container>
      ) : null}
      <Container className="task">
        {/* Task Post */}
        <b>Posted By: </b> {user.username}
        <br />
        <b>Job: </b> {desc}
        <br />
        <b>City: </b> {city}
        <br />
        <b>Due By: </b> {date}
        <br />
        {/* edit button/ comment button */}
        {currentUser.id === user.id ? (
          <button className="task__action" onClick={() => setEdit(!edit)}>
            Edit
          </button>
        ) : (
          <button
            className="task__action"
            onClick={() => setComments(!comments)}
          >
            Get Plugged
          </button>
        )}
      </Container>
      {/* comment section */}
      {comments ? (
        <Container className="task__comment_container">
          <Form className="task__form">
            <FormGroup>
              <Label for="Desc">Message Me!</Label>
              <Input
                onChange={(e) => setMessage(e.target.value)}
                id="Desc"
                name="Desc"
                type="textarea"
              />
              <i className="message__disclaimer">Contact information will be attached to your message.</i>
            </FormGroup>
            <Button onClick={handleSubmit}>Send</Button>
          </Form>
        </Container>
      ) : null}
    </div>
  );
}

export default TaskList;
