import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import "./styles.css"

import BasicForm from "../../components/BasicForm";

const Login = () => {
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const fields = [
        {
            label: "Email",
            name: "email",
            type: "email",
            defaultValue: "",
            validate: (value) => {
                if (!value) {
                    return "Email is Required"
                }
                if (!validateEmail(value)) {
                    return "Email is not Valid"
                }
                return false;
            }
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            defaultValue: "",
            validate: (value) => {
                if (!value) {
                    return "Password is Required"
                }
                return false;
            }
        },
    ]
    const debug = false
    const handleLogin = async (values, instance) => {
        console.log("Login Form Submitted Successfully")
        console.log(values)
    }
    return (
        <Container fluid className="login_screen">
            <Row>
                <Col sm="5" className="login__screen__left__banner">
                    <span className="login__screen__left__heading">Safe Bitcoin Transactions start on Trading App</span>
                    <span className="login__screen__left__small__heading">1 Out of 4 Crypto Holders Worldwide Is with Trading App</span>
                </Col>
                <Col sm="7">
                    <Container className="login__screen__right">
                        <span className="login__screen__right__signup">Haven't registered?&nbsp;&nbsp;<Link to="/signup">Sign Up now</Link></span>
                        <span className="login__screen__right__heading">Log In</span>
                        <div className="login__screen__right__login__form">
                            <BasicForm fields={fields} debug={debug} btnName="Login" onSubmit={handleLogin} resetPassword={true} />
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
