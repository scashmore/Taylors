import React from 'react'
import './style.css'
import { Card, Carousel } from 'react-bootstrap'
import green from '../../images/green.png'

function Greenville() {
    return (
        <div className="bg">
            <Card>
                <Card.Img className="hero" src='https://picsum.photos/200/300?grayscale' />
            </Card>
            <Card className="green">
                <div className="time">
                    <h1>Store Hours</h1>
                    <h2>Monday - Saturday</h2>
                    <h3>10 am - 6 pm</h3>
                    <h2>Sunday</h2>
                    <h3>12 pm - 5 pm</h3>                    
                </div>
                <img className="img" src='https://picsum.photos/400/300?grayscale' />
            </Card>
            <Card className="green">
                <div className="add">
                    <h2>O.P. Taylors</h2>
                    <h2>117 North Main Street</h2>
                    <h2>Greenville, SC 29601</h2>
                    <h2><a href="tel:​864-467-1984">​864-467-1984</a></h2>                   
                </div>
                <a href="https://www.google.com/maps/place/O.P.+Taylor's/@34.8494702,-82.4037565,15.27z/data=!4m5!3m4!1s0x885831d1dd60043d:0x57c195e66c933544!8m2!3d34.8521511!4d-82.3985911" target="_blank"><img className="map" src={green}/></a>
                
            </Card>
        </div>
    )
}

export default Greenville