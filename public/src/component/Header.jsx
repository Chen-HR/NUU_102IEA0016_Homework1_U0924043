import logo from "../logo.svg"
import { Navbar, Container, Nav } from "solid-bootstrap";
export default function Header() 
  {
    return ( 
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <img alt="logo.svg" src={logo} width="30" height="30"/>
              <span class="mx-1">NUU-102IEA0016-Homework1-U0924043</span>
            </Navbar.Brand>
          </Container>
          <br/>
          <Nav className="me-0">
            <Nav.Link href="/        " style="width:50px;text-align:center;">首頁</Nav.Link>
            <Nav.Link href="/hall    " style="width:50px;text-align:center;">大廳</Nav.Link>
            <Nav.Link href="/patient " style="width:50px;text-align:center;">掛號</Nav.Link>
            <Nav.Link href="/doctor  " style="width:50px;text-align:center;">看診</Nav.Link>
          </Nav>
        </Navbar>
      );
  }