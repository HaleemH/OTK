import React from "react";
import { Link } from "react-router-dom";
import {
  CardImg,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import officepic from "../assets/officepic.jpg";

function MainCard({ id, name, address, rating, img, setVendorId }) {
  return (
    <Card color="light" className="vendor__card" >
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardImg alt="city pic" src={img ? img : officepic} width="100%" />
        <CardText>
          {address}
          <br />
          Rating: {rating}
        </CardText>
        <Link to={`/MoreInfo/${id}`}>
          <Button onClick={() => setVendorId(id)}>Check Out</Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default MainCard;
