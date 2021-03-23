import React from 'react';
import "./styles.css";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact-page-hero-section">
                <h1>We'd love to hear from You.</h1>
                <p>Whether you have a question about features, trials, pricing, needs a demo or anything else, our team is ready to answer all the questions.</p>
                <button className="btn btn-primary custom-button-color">Get in Touch</button>
            </div>
            <Footer />
        </>
    )
}

export default Contact
