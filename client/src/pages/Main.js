import React from "react";
import MainCardList from "../components/MainCardList";
import { Container } from "reactstrap";

function Main({vendors}) {
  return (
    <Container className="main__container">
      <div className="hero__content">
        <h3>Find local small businesses with one search</h3>
      </div>
      <Container className="main__hero"></Container>
      <MainCardList  vendors={vendors}/>
    </Container>
  );
}

export default Main;
