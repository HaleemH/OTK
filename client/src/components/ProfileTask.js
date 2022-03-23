import React, { useEffect, useState} from "react";
import {Container, Card, CardBody} from "reactstrap"

function ProfileTask({task}) {
    const [comment, setComment] = useState([])
    // Date format
     const dueDate = task.due_by.split("-");
     const dateArr = [dueDate[1], dueDate[2], dueDate[0]];
     const date = dateArr.join("-");
    // Comment for each task
    useEffect(() => {
        fetch(`/task_comments/${task.id}`)
        .then(r => r.json())
        .then(res => setComment())
    },[])
     return (
       <Container>
         <Card>
           <CardBody>
             Due Date: <b>{date}</b>
             <br />
             Job: {task.description}
             <br />
             City: {task.city}
           </CardBody>
           <CardBody>
             <h4>Messages: </h4>
           </CardBody>
         </Card>
       </Container>
     );
}

export default ProfileTask;
