import React, { useState } from "react";
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

export default function Login(props) {
  const [names, setNames] = useState("");
  const [dates, setDates] = useState("");
    const [notes, setNotes] = useState("");

  function validateForm() {
    return names.length > 0 && dates.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.set('names', data.get('names'));
    console.log(data);

    fetch('/api/meeting', {
      method: 'POST',

      body: data,
    });
  }


  return (

    <div class="form-group">
    <Container className="App">
    <h2>Create a Meeting</h2>

          <Form className = "form" onSubmit={handleSubmit}>
            <React.Fragment>
            <Form.Row>
              <Col>
                <Form.Label>Participant names seperated by a comma</Form.Label>
                <Form.Control placeholder="i.e Bryce, John, Steve"  value={names}
            onChange={e => setNames(e.target.value)} name="name" id="name" />

              </Col>
              <Col>
                <Form.Label>Please enter todays date</Form.Label>
                <Form.Control placeholder="10/21/2019"   value={dates}
            onChange={e => setDates(e.target.value)}name="date"id = "date"/>
              </Col>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Notes</Form.Label>
      <Form.Control as="textarea" rows="3" name = "notes"   value={notes}
            onChange={e => setNotes(e.target.value)}id = "notes"/>
    </Form.Group>
            <Form.Check
      type="switch"
      id="save"
      label="Save Meeting Notes?"
    />

    <Button variant="primary" type="submit">
      Submit
    </Button>
    </React.Fragment>

          </Form>

          </Container>
    </div>
  );
}
