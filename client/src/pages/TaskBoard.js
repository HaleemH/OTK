import React,{ useEffect, useState} from 'react'
import { Container, ListGroup, ListGroupItem} from "reactstrap"



function TaskBoard() {
  return (
    <Container>
      TaskBoard
      <ListGroup className="Task__list">
        <ListGroupItem>username: First Tast</ListGroupItem>
        <ListGroupItem>username: Second Tast</ListGroupItem>
        <ListGroupItem>username: Third Tast</ListGroupItem>
      </ListGroup>
    </Container>
  );
}

export default TaskBoard