import React, { Component } from "react";

import Logo from "./logo.png";
import Background from "./background.jpeg";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Clock from './clock';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import AddTripButton from './button2.jsx';
import Meeting from './meeting.jsx';
import UndoTripButton from './undotrip.jsx';
export default class Header extends Component{
  state = {

  }
  constructor(props) {
  super(props)
  this.state = { isEmptyState: true }
}
triggerAddTripState = () => {
  this.setState({
    ...this.state,
    isEmptyState: false,
    isAddTripState: true
  })
}
triggerNotTripState = () => {
  this.setState({
    ...this.state,
    isEmptyState: true,
    isAddTripState: false
  })
}
  render(){
    return (
      <div>
        


            {this.state.isAddTripState && <UndoTripButton addTrip={this.triggerNotTripState}/> &&<Meeting />}

      <Container>



  <Row >
   <Col md={{ span: 8 }} >
   <div >
    <Card className = "mt-5" >
    <Card.Body>
    <br></br>
    <h1>Welcome to the Duck Pond!</h1>

    <h4><Clock></Clock></h4>
    </Card.Body>
</Card>

</div>
    </Col>
    <Col sm={4}><img width={300} height={300} src = {Logo}/></Col>

  </Row>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Background}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Label</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Background}
      alt="Welcome to Crest"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Background}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <Row>

  </Row>
</Container>
<Card>
<Card.Body>
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={Logo}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h3>Upcoming Events!</h3>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>

</Card.Body>
</Card>
<Card>
<Card.Body>
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={Logo}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h3>Upcoming Events!</h3>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
</Card.Body>
</Card>

      </div>
    )
  }
}
