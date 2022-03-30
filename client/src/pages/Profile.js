import React, { useEffect, useState } from "react";
import ProfileTask from "../components/ProfileTask";
import { Card, CardBody, CardTitle, CardText, Container } from "reactstrap";

function Profile({ user }) {
  const [task, setTask] = useState([]);
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch(`/profile/${user.id}`)
      .then((r) => r.json())
      .then((res) => {
        setTask(res);
      });
  }, []);

  

  // useEffect(() => {
  //   const tasks = localStorage.getItem("tasks-data");
  //   if (tasks) {
  //     setTask(JSON.parse(tasks));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks-data", JSON.stringify(task));
  // });

  return (
    <>
      <div className="profile__hero"></div>
      <Container className="profile__card">
        <Card color="light">
          <CardBody>
            <CardTitle tag="h5">
              {user.first_name} {user.last_name}
            </CardTitle>
            <CardText>
              {user.username}
              <br />
              {user.email}
            </CardText>
          </CardBody>
        </Card>
        <h3>Open Task:</h3>
        {task.map((t) => (
          <ProfileTask
            key={t.id}
            task={t}
            setTime={setTime}
            time={time}
            user={user}
          />
        ))}
      </Container>
    </>
  );
}

export default Profile;
