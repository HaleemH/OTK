import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
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
function TaskList({ desc, due, user, id, city, currentUser, setRefreshList }) {
  const [comments, setComments] = useState(false);
  const [edit, setEdit] = useState(false);
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
        if (res.id) {
          setRefreshList(Date());
        } else {
          alert(res.errors);
        }
      })
      .then(refresh());
  }
  // console.log(newDate.getSeconds())
  function handleDelete() {
    fetch(`tasks/${id}`, {
      method: "DELETE",
    }).then(refresh());
  }
  function refresh() {
    setMessage("");
    setComments(false);
    setEdit(false);
  }
  return (
    <div className="task__container">
      <Container className="task">
        {/* Task Post */}
        <Zoom>
          <i>Posted By: </i> {user.username}
          <br />
          <i>Job: </i>
          {desc}
          <br />
          <i>City: </i>
          {city}
          <br />
          <i>Due By: </i> {date}
          <br />
          {/* edit button/ comment button */}
          {currentUser.id === user.id ? (
            <Link to="/profile">
              <button className="task__action" onClick={() => setEdit(!edit)}>
                Edit Task
              </button>
            </Link>
          ) : (
            <button
              className="task__action"
              onClick={() => setComments(!comments)}
            >
              Get Plugged
            </button>
          )}
        </Zoom>
      </Container>
      {/* comment section */}

      {comments ? (
        <Container className="task__comment_container">
          <Fade>
            <Form className="task__form">
              <FormGroup>
                <Label for="Desc">Message Me!</Label>
                <Input
                  onChange={(e) => setMessage(e.target.value)}
                  id="Desc"
                  name="Desc"
                  type="textarea"
                />
                <i className="message__disclaimer">
                  Contact information will be attached to your message.
                </i>
              </FormGroup>
              <Button onClick={handleSubmit}>Send</Button>
            </Form>
          </Fade>
        </Container>
      ) : null}
    </div>
  );
}

export default TaskList;
