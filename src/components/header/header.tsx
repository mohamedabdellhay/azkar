
// import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./header.css"

const Header = ()=> {
    return(
        <header dir='rtl'>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} style={{color: "black"}}>الرئيسية</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link to="/about" as={NavLink} style={{color: "black"}}>معلومات عنا</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} style={{color: "black"}}>الرئيسية</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link to="/about" as={NavLink} style={{color: "black"}}>معلومات عنا</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
        </header>      
    );
}


export default Header;