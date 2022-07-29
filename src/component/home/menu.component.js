import { Navbar, Container, Nav, Form } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const HomeMenu=()=>{
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <AuthCompo />
                    
                </Nav>
                <Form action="/search">
                    <Form.Control 
                    type="search" 
                    name="q" 
                    size="sm" 
                    placeholder="Enter Search keyword"
                    ></Form.Control>
                </Form>
            </Container>
        </Navbar>
    )
}

const AuthCompo = () => {
    return (<>
        <NavLink className="nav-link" to="/register">Register</NavLink>
        <NavLink className="nav-link" to="/login">Login</NavLink>
    </>)
}