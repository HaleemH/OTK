import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import NewTask from "../components/NewTask";
import TaskList from "../components/TaskList";

function TaskBoard({ user }) {
  const [taskList, setTaskList] = useState([]);
  const [refreshList, setRefreshList] = useState();
  useEffect(() => {
    fetch("/tasks")
      .then((r) => r.json())
      .then((res) => setTaskList(res));
  }, [refreshList]);
  return (
    <>
      <div className="task__hero"></div>
      {user ? (
        <Container>
          <h3>Hello {user.first_name}, need a specific job completed?</h3>
          <NewTask user={user} setRefreshList={setRefreshList} />
          {taskList.map((task) => (
            <TaskList
              key={task.id}
              desc={task.description}
              due={task.due_by}
              city={task.city}
              user={task.user}
              currentUser={user}
              id={task.id}
              setRefreshList={setRefreshList}
            />
          ))}
        </Container>
      ) : (
        <h2>🛑 Must be logged in to view Task section 🛑</h2>
      )}
    </>
  );
}

export default TaskBoard;
