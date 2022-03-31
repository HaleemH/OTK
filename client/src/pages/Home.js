import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import MainCardList from "../components/MainCardList";
import { Container } from "reactstrap";

function Home({ setVendorId }) {
  const [vendors, setVendors] = useState([]);

  // -----

  useEffect(() => {
    fetch("/vendors")
      .then((r) => r.json())
      .then((res) => setVendors(res));
  }, []);

  return (
    <div className="top_level">
      <Container className="home__jumbo"></Container>

      {/*  */}
      {/* <div className="main__hero"></div> */}
      <p className="greeting">
        Welcome to Plugged🔌N. Find a local business, or Check out our{" "}
        <a href="/TaskBoard" className="link-task">
          <Zoom right>TaskBoard</Zoom>
        </a>
      </p>
      <Container className="main__container">
        <MainCardList vendors={vendors} setVendorId={setVendorId} />
      </Container>
    </div>
  );
}

export default Home;
