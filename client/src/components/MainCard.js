import React from 'react'
import {Link} from "react-router-dom"
import { CardImg, Card, CardBody, CardTitle,CardText, Button} from "reactstrap"
import officepic from "../assets/officepic.jpg"

function MainCard({setVendorPage, vendorPage}) {
  return (
    <Card color="light" className="card__container">
      <CardBody>
        <CardTitle tag="h5">Prolific Tech</CardTitle>
        <CardImg alt="city pic" src={officepic} width="100%" />
        <CardText>
          Solving your business needs with your vision in mind.
        </CardText>
        <Button
          as={Link}
          onClick={() => setVendorPage(1)}
          to={`/MoreInfo/${vendorPage}`}
        >
          Check Out
        </Button>
      </CardBody>
    </Card>
  );
}

export default MainCard