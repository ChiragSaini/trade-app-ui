import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import "./styles.css"

import BasicForm from "../../components/BasicForm";

const Signup = () => {
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
            name: "password1",
            type: "password",
            defaultValue: "",
            validate: (value) => {
                if (!value) {
                    return "Password is Required"
                }
                if (value.length < 6) {
                    return "Passwords length should atleast be 6"
                }
                return false;
            }
        },
        {
            label: "Confirm Password",
            name: "password2",
            type: "password",
            defaultValue: "",
            validate: (value) => {
                if (!value) {
                    return "Confirm Password is Required"
                }
                if (value.length < 6) {
                    return "Passwords length should atleast be 6"
                }
                return false;
            }
        },
    ]
    const debug = false

    const handleSubmit = async (values, instance) => {
        if (values.password1 !== values.password2) {
            console.log("Passwords Do Not Match")
            return "Passwords do not match";
        } else {
            console.log("SignUp Form Submitted Successfully")
            console.log(values)
        }
    }

    return (
        <Container fluid className="signup_screen">
            <Row>
                <Col sm="5" className="signup__screen__left__banner">
                    <span className="signup__screen__left__heading">Safe Bitcoin Transactions start on Trading App</span>
                    <span className="signup__screen__left__small__heading">1 Out of 4 Crypto Holders Worldwide Is with Trading App</span>
                </Col>
                <Col sm="7">
                    <Container className="signup__screen__right">
                        <span className="signup__screen__right__login">Already have an Account?&nbsp;&nbsp;<Link to="/login">Login</Link></span>
                        <span className="signup__screen__right__heading">Sign Up</span>
                        <div className="signup__screen__right__signup__form">
                            <BasicForm fields={fields} debug={debug} btnName="Sign Up" onSubmit={handleSubmit} />
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup
