import React from 'react'
import { Link } from "react-router-dom"
import "./styles.css"

const Footer = () => {
    return (
        <div className="my-footer">
            <span>&copy; ExchangeApp 2020</span>
            <div className="social-media">
                <Link><i class="fab fa-lg fa-facebook"></i></Link>
                <Link><i class="fab fa-lg fa-twitter"></i></Link>
                <Link><i class="fab fa-lg fa-linkedin"></i></Link>
            </div>
        </div>
    )
}

export default Footer
