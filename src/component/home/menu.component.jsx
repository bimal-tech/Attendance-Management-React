import { Navbar, Container, Nav, Form } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const HomeMenu=()=>{
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Attendance System</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">Attendance</NavLink>
                    <AuthCompo />
                </Nav>
            </Container>
        </Navbar>
    )
}

const AuthCompo = () => {
    return (<>
        <NavLink className="nav-link" to="/login">Login</NavLink>
    </>)
}