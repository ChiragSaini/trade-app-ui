import React from 'react';
import "./styles.css";
import { Jumbotron, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer"

const TermsAndConditions = () => {
    return (
        <div className="terms-of-use-main">
            <Navbar />
            <Container fluid className="terms-of-use-container">
                <h3>Terms and Conditions</h3>
                <small>2019/08/13 13:50:35 Read more</small>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, maxime.</p>

                <strong>Summary of Terms of Use</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero animi atque officiis odit maiores? Aperiam distinctio suscipit exercitationem, neque atque iusto expedita est debitis voluptates.</p>

                <strong>Our Services</strong>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia et ea accusamus modi pariatur magni, blanditiis ad velit quisquam necessitatibus sit sint eveniet odio aspernatur?</p>

                <strong>Elligibilty and Acceptable Use</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit architecto magni minus a distinctio amet soluta consectetur molestias quae ipsa, labore, aliquam, cum obcaecati itaque saepe pariatur debitis? Assumenda!</p>

                <strong>Complete Terms of Use</strong>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, unde quisquam porro aut quas nihil explicabo quibusdam, iure facere voluptate magni! Autem, illum dolore. Quas maiores quidem delectus cum vero.</p>

                <strong>Elligibilty and Acceptable Use</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit architecto magni minus a distinctio amet soluta consectetur molestias quae ipsa, labore, aliquam, cum obcaecati itaque saepe pariatur debitis? Assumenda!</p>

                <strong>Complete Terms of Use</strong>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, unde quisquam porro aut quas nihil explicabo quibusdam, iure facere voluptate magni! Autem, illum dolore. Quas maiores quidem delectus cum vero.</p>
            </Container>
            <Footer />
        </div>
    )
}

export default TermsAndConditions;
