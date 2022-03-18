import React from 'react'
import {Link} from "react-router-dom"
import { CardImg, Card, CardBody, CardTitle,CardText, Button} from "reactstrap"
import officepic from "../assets/officepic.jpg"

function MainCard({id,name,address,website,rating,img}) {

  
  
  return (
    
    <Card color="light" className="card__container">
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardImg alt="city pic" src={img? img:officepic} width="100%" />
        <CardText>{address}<br/>{website}<br/>{rating}
        </CardText>
        <Button
          as={Link}
          // onClick={() => setVendorPage(id)}
          // to={`/MoreInfo/${id}`}
        >
          Check Out
        </Button>
      </CardBody>
    </Card>
  );
}

export default MainCard