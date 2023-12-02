import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import firebase from './../../Data/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(firebase)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                Swal.fire(
                    'Welcome',
                    'User Authenticated!!',
                    'success'
                ).then(() => {
                    navigate('/')
                })
            })
            .catch(error => {
                Swal.fire(
                    'Upssss Failed',
                    `Error: ${error.message}`,
                    'error'
                )
            })
    }



    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 custom-form-group" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingresar email" onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group className="mb-3 custom-form-group" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                        </Form.Group>
                        <Button variant="outline-danger" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login