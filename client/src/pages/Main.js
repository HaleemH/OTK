import React, { useState, useEffect } from "react";
import MainCardList from "../components/MainCardList";
import { Container, Input } from "reactstrap";

function Main({ setVendorId }) {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("/vendors")
      .then((r) => r.json())
      .then((res) => setVendors(res));
  }, []);

  return (
    <>
      <div className="main__hero">
        {/* <Input className=""bsSize="sm" type="search" /> */}
      </div>
      <Container className="main__container">
        <h3></h3>
        <MainCardList vendors={vendors} setVendorId={setVendorId} />
      </Container>
    </>
  );
}

export default Main;
