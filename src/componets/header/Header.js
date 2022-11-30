import {Container, Navbar} from "react-bootstrap";
const Header =() =>{
    return(
        <Navbar bg='danger' variant='dark' fixed='top'>
            <Container>
                <Navbar.Brand>Poetry</Navbar.Brand>
            </Container>
        </Navbar>
    )

}
export default Header