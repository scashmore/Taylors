import React from 'react'
import './style.css'
import { Card, Carousel } from 'react-bootstrap'
import ash from '../../images/ash.png'
import avl from '../../images/avl.png'

function Asheville() {
    return (
        <div className="bg">
            <Card>
                <Card.Img className="hero" src='https://picsum.photos/200/300?grayscale' />
            </Card>
            <Card className="ash">
                <div className="time">
                    <h1>Store Hours</h1>
                    <h2>Monday - Saturday</h2>
                    <h3>10 am - 6 pm</h3>
                    <h2>Sunday</h2>
                    <h3>12 pm - 5 pm</h3>                    
                </div>
                <img className="imgs" src={avl} width="400px" height="300px" />
            </Card>
            <Card className="ash">
                <div className="add">
                    <h2>O.P. Taylors</h2>
                    <h2>2 Town Sqaure Blvd #130</h2>
                    <h2>Asheville, NC 28803</h2>
                    <h2><a href="tel:828-681-1865">828-681-1865</a></h2>                   
                </div>
                <a href="https://www.google.com/maps/place/O.P.+Taylor's+Asheville/@35.4849039,-82.5590939,16.1z/data=!3m1!5s0x8859ed36f343305b:0x7edf0a3af1de75f5!4m5!3m4!1s0x8859ed36f32c2f55:0xb4b5fc47023f29cf!8m2!3d35.4860437!4d-82.5548375" target="_blank"><img className="map" src={ash}/></a>
                
            </Card>
        </div>
    )
}

export default Asheville