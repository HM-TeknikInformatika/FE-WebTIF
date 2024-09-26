import React from "react";
import { Carousel } from "react-bootstrap";
import heroImage1 from "/public/assets/img/Hero1.jpeg";
import heroImage2 from "/public/assets/img/Hero2.jpeg";
import heroImage3 from "/public/assets/img/Hero3.jpeg";
import iconImage from "/public/assets/img/Logo.png";
import "/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Proker } from "../../proker";
import { Structure } from "../../structure";
import { Artikel } from "../../artikel";
import { Pendaftaran } from "../../pendaftaran";
import { Footer } from "../../footer";


export const Beranda = () => {
    return (
        <div className="homepage">
            <header className="header-box">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={heroImage1}
                            alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={heroImage2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={heroImage3}
                            alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </header>

            <div className="container Desc-Item">
                <img src={iconImage} alt="" />
                <h1>HM TIF UNISSULA</h1>
                <p>
                    HM-TIF Unissula merupakan Himpunan Mahasiswa Jurusan Teknik
                    Informatika Unissula yang memiliki tugas utama yaitu untuk
                    meningkatkan atau menunjang kualitas Mahasiswa Teknik Informatika
                    dalam hal akademik maupun non-akademik. Selain itu juga HM-TIF
                    merupakan wadah untuk menampung berbagai aspirasi ataupun keresahan
                    Mahasiswa Teknik Informatika yang nantinya akan ditindaklanjuti agar
                    kedepannya Teknik Informatika menjadi lebih baik.
                </p>
            </div>

            <div className="Desc-SocialMedia">
                <h1 className="container">Tetap terhubung platform sosial media kami. Lihat postingan terbaru, berikan umpan balik, dan jadilah bagian dari komunitas kami.</h1>
                <button>Lihat Selengkapnya <FaArrowUpRightFromSquare /></button>
            </div>

            <div><Structure /></div>
            <div><Proker /></div>
            <div><Artikel /></div>
            <div><Pendaftaran /></div>
            <div><Footer /></div>

        </div>
    );
};
