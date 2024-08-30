import React from "react";
import { Carousel } from "react-bootstrap";
import heroImage1 from '/src/assets/img/Hero1.jpeg';
import heroImage2 from '/src/assets/img/Hero2.jpeg';
import heroImage3 from '/src/assets/img/Hero3.jpeg';
import "/src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Beranda = () => {
    return (
        <div className="homepage">
            <header className="header-box">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={heroImage1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={heroImage2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={heroImage3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </header>
        </div>
    );
};
