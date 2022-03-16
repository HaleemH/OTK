import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Button } from "reactstrap";

function Home() {
  const [showButton, setShowButton] = useState(false);
  const [navMain, setNavMain] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 500);
  }, []);
  
  return (
    <Container className="home__jumbo">
      <div className="jumbo-txt">
        <h2>Connecting Small Businesses and Customers</h2>
      </div>

      {showButton ? (
        <Button onClick={() => setNavMain(true)} className="jumbo__button">
          Get Plugged
        </Button>
      ) : null}

      {navMain ? <Navigate to="/Main" /> : null}
    </Container>
  );
}

export default Home;
