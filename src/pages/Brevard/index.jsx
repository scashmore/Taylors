import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import './style.css'
import brvd from '../../images/brvd.png'
import brvd1 from '../../images/brvd.jpg'

function Brevard() {
    return (
        <div className="bg">
            <Card>
                <Card.Img className="hero" src='https://picsum.photos/200/300?grayscale' />
            </Card>
            <Card className="brev">
                <div className="time">
                    <h1>Store Hours</h1>
                    <h2>Monday - Saturday</h2>
                    <h3>10 am - 6 pm</h3>
                    <h2>Sunday</h2>
                    <h3>12 pm - 5 pm</h3>
                </div>
                <img className="imgs" src={brvd1} width="400px" height="300px" />
            </Card>
            <Card className="brev">
                <div className="add">
                    <h2>O.P. Taylors</h2>
                    <h2>16 S. Broad Street</h2>
                    <h2>Brevard, NC 28712</h2>
                    <h2><a href="tel:828-883-2309">828-883-2309</a></h2>                   
                </div>
                <a href="https://www.google.com/maps/search/o+p+taylor's/@35.2334612,-82.7365643,15.67z" target="_blank"><img className="map" src={brvd}/></a>
                
            </Card>
        </div>
    )
}

export default Brevard