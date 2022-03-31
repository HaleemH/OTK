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
    <Card color="light">
      <CardBody>
        <CardTitle tag="h2">{name}</CardTitle>
        <CardImg
          alt="city pic"
          src={img ? img : officepic}
          width="100%"
          className="card__img"
        />
      </CardBody>
      <Link to={`/MoreInfo/${id}`}>
        <Button onClick={() => setVendorId(id)} className="main__card__button">
          Check Out
        </Button>
      </Link>
    </Card>
  );
}

export default MainCard;
