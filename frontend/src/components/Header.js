import {Link} from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <Navbar style={{backgroundColor:"#757bc8",height:"60px"}} expand="lg">
             <Container fluid>
              <Navbar.Brand style={{color:"white",fontFamily:"cursive",fontWeight:"Bolder",fontSize:"30px"}}> <Link to="/" style={{color:"white",textDecoration:"none"}}>CineFlicks</Link></Navbar.Brand>
              <div className="d-flex">
              <Button variant="outline-success" style={{color:"white",border:"2px solid white",marginRight:"5px"}}><Link to="/profile" style={{color:"white",textDecoration:"none"}}>Profile</Link></Button>
              <Button variant="outline-success" style={{color:"white",border:"2px solid white"}}><Link to="/login" style={{color:"white",textDecoration:"none"}}>SignIn</Link></Button>
              </div>
            </Container>
      </Navbar>
      
    )
  }
}
export default Header





