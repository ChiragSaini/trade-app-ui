import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import "./styles.css"

import BasicForm from "../../components/BasicForm";

const ResetPassword = () => {
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
        }
    ]
    const debug = false
    const handleResetPassword = async (values, instance) => {
        console.log("Forget Password Form Submitted Successfully")
        console.log(values)
    }
    return (
        <Container fluid className="reset_screen">
            <Row>
                <Col sm="5" className="reset__screen__left__banner">
                    <span className="reset__screen__left__heading">Safe Bitcoin Transactions start on Trading App</span>
                    <span className="reset__screen__left__small__heading">1 Out of 4 Crypto Holders Worldwide Is with Trading App</span>
                </Col>
                <Col sm="7">
                    <Container className="reset__screen__right">
                        <span className="reset__screen__right__login">Already have an Account&nbsp;&nbsp;<Link to="/login">Login</Link></span>
                        <span className="reset__screen__right__heading">Reset Password</span>
                        <span className="reset__screen__right__subheading">Enter you Email Address to reset your password</span>
                        <div className="reset__screen__right__reset__form">
                            <BasicForm fields={fields} debug={debug} btnName="Reset Password" onSubmit={handleResetPassword} />
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ResetPassword
