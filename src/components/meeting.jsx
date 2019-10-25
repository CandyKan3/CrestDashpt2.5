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
import UndoTripButton from './undotrip.jsx';
import AddTripButton from './button2.jsx';
import Login from './login.jsx';
import { useState } from "react";
export default class Header extends Component{
  state = {

  }
  constructor() {
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { isEmptyState: false}
}


  handleSubmit(event) {
  event.preventDefault();

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
<Login />
            {this.state.isEmptyState && <UndoTripButton addTrip={this.triggerNotTripState}/> && <Header />}


      </div>
    )
  }
}
