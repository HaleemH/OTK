import React, { useEffect, useState} from "react";
import {Container, Card, CardBody} from "reactstrap"
import Message from '../components/Message'

function ProfileTask({task, setTime, time}) {
    const [comment, setComment] = useState([])
    // Date format
     const dueDate = task.due_by.split("-");
     const dateArr = [dueDate[1], dueDate[2], dueDate[0]];
     const date = dateArr.join("-");
    
    // Comment for each task
    useEffect(() => {
        fetch(`/task_comments/${task.id}`)
        .then(r => r.json())
        .then(res => setComment(res))
    },[time])

    function handleDelete(){
      fetch(`tasks/${task.id}`, {
        method: "DELETE",
      }).then(setTime(Date.now()));
    }

     return (
       <Container className="profile__task__card">
         <Card>
           <button className="profile__button" onClick={handleDelete}>X</button>
           <CardBody>
             Due Date: <b>{date}</b>
             <br />
             Job: {task.description}
             <br />
             City: {task.city}
           </CardBody>
           <CardBody>
             {comment.map((c) => <Message key={c.id} message={c}/>)}
             
           </CardBody>
         </Card>
       </Container>
     );
}

export default ProfileTask;
