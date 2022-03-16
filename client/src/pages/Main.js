import React from "react";
import MainCard from "../components/MainCard";
import { Container } from "reactstrap";

function Main({setVendorPage, vendorPage}) {
  
  return (
    <Container className="main__container">
      <div className="hero__content">
        <h3>
          Find local small businesses

          with one search
        </h3>
      </div>
      <Container className="main__hero"></Container>
      <MainCard setVendorPage={setVendorPage} vendorPage={vendorPage}/>
    </Container>
  );
}

export default Main;
