import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import './style.css'

function Home() {
    return (
        <>
            <div className="bg">
                <Card>
                    <Card.Img className="hero" src='https://picsum.photos/200/300?grayscale' />
                </Card>
                <Card className="home">
                    <p>The original store, located in beautiful downtown Brevard, North Carolina,
                    is over 6,000 square feet of fun and hands-on excitement. There is a reason
                    that O.P. Taylor’s continues to be the #1 toy store in the South, so come and experience
                    it for yourself!​ All of O.P. Taylor’s stores are strategically located near
                    terrific restaurants and other fascinating stores. Either make a day of it
                    and visit one of our stores, or, get up early and visit all three. We can’t
                        wait to see you!</p>
                    <img className="img" src='https://picsum.photos/400/300?grayscale' />
                </Card>
                <Card className='hot'>
                    <h1>Hot Items</h1>
                    <Card className="items">
                        <Carousel className="carousel">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/200/150?grayscale"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/200/150?grayscale"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/200/150?grayscale"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Card>
                </Card>
                <Card className='store'>
                    <p>
                        Can't make it to one of our locations? Then checkout our Amazon store! 
                        <br></br>
                        <a href="https://www.amazon.com/s?me=A1LTJY4HYKZU11&marketplaceID=ATVPDKIKX0DER&redirect=true" target="_blank">
                            Click here to shop online now!</a>
                    </p>
                </Card>
            </div>
        </>
    )

}

export default Home