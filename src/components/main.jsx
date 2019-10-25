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
import Header from './header.jsx';
import UndoTripButton from './undotrip.jsx';
export default class Main extends Component{
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
    <AddTripButton addTrip={this.triggerAddTripState}/>
        {this.state.isEmptyState&& <Header />}
          {this.state.isAddTripState&& <Meeting/>}




    </div>
  )
}
}
