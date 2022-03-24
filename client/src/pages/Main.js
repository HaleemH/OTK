import React, { useState, useEffect } from "react";
import MainCardList from "../components/MainCardList";
import { Container} from "reactstrap";

function Main({ setVendorId }) {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("/vendors")
      .then((r) => r.json())
      .then((res) => setVendors(res));
  }, []);

  return (
    <>
      <div className="main__hero"></div>
      <h3>Browse Local businesses</h3>
      <Container className="main__container">
        <MainCardList vendors={vendors} setVendorId={setVendorId} />
      </Container>
    </>
  );
}

export default Main;
