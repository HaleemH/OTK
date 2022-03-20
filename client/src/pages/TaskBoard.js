import React,{ useEffect, useState} from 'react'
import { Container, ListGroup, ListGroupItem} from "reactstrap"
import NewTask from '../components/NewTask'



function TaskBoard({ user}) {
    const[taskList, setTaskList] = useState([])
    useEffect(() => {
        fetch('/tasks')
        .then(r => r.json())
        .then(res => setTaskList(res))
    },[])
    console.log(taskList)
  return (
    <Container>
      TaskBoard
      <NewTask user={user}/>
      <ListGroup className="Task__list">
        <ListGroupItem>username: {taskList.user_id}</ListGroupItem>
      </ListGroup>
    </Container>
  );
}

export default TaskBoard