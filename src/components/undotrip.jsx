import React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
const UndoTripButton = props => {

      return <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">CReST</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Meetings" onClick={props.addTrip} >Meetings</Nav.Link>
            <Nav.Link href="#Calander">Calander</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

      </div>

}

export default UndoTripButton
