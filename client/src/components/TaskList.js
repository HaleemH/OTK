import React, { useState } from "react";
import { Link } from "react-router-dom";
function TaskList({ desc, due, user, id, city, setTaskId, taskId ,currentUser}) {
  const [show, setShow] = useState(false);
  const dueDate= due.split("-")
  const dateArr= [dueDate[1], dueDate[2], dueDate[0]]
  const date= dateArr.join("-")
  console.log(date)
  return (
    <div className="task">
      <b>Posted By: </b> {user.username}
      <br />
      <b>Job: </b> {desc}
      <br />
      <b>City: </b> {city}
      <br />
      <b>Due By: </b> {date}
      <br />
      {/*  */}
      {/*  */}
      {currentUser.id === user.id ? (
        <button> Edit Job</button>
      ) : (
        <Link to={`/Task/${id}`}>
          <button onClick={() => setTaskId(id)}>Get Plugged</button>
        </Link>
      )}
    </div>
  );
}

export default TaskList;
