import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAmazon, faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import {Navbar} from 'react-bootstrap'
import './style.css'

function Footer() {
    return (
        <>
        <Navbar bg="light" className="foot">
        <a className="icon" href="https://www.facebook.com/OPTaylors" target="_blank">
        <FontAwesomeIcon icon={faFacebook} color="blue" size="lg"/>
        </a>
        <a className="icon" href="https://www.amazon.com/s?me=A1LTJY4HYKZU11&marketplaceID=ATVPDKIKX0DER&redirect=true" target="_blank">
        <FontAwesomeIcon icon={faAmazon} color="black" size="lg"/>
        </a>
        <a className="icon insta" href="https://www.instagram.com/optaylors/?hl=en" target="_blank">
        <FontAwesomeIcon icon={faInstagramSquare} color="" border-radius="10%" size="lg"/>
        </a>
        </Navbar>
        </>
    )
}
export default Footer