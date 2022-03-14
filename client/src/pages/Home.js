import React,{useEffect, useState} from "react";
import {Container, Button, Fade} from "reactstrap"

function Home() {

  const[showGreeting, setShowGreeting] = useState(false)
useEffect(()=> { 
  setTimeout(()=> { 
    setShowGreeting(true)
  },500)
},[])
  return (
    <Container className="home__jumbo">
      {showGreeting ? (
          <div className="jumbo-txt">
            <h2>Connecting Small Businesses and Customers</h2>
          </div>
      ) : null}
      {showGreeting? <Button className="jumbo__button">Get Plugged</Button> : null}
    </Container>
  );
}

export default Home;
