import React from "react";
import "/src/App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../../assets/proker/product";
import { productData, responsive } from "../../assets/proker/data";

export const Proker = () => {
    
    const product = productData.map((item) => (
        <Product
            name={item.name}
            image={item.Image}
            time={item.descTime}
            location={item.descLocation}
        />
    ));

    return (
        <div className="program-kerja container">
            <h1>Program Kerja 2023 - 2024</h1>
            <Carousel responsive={responsive}>{product}</Carousel>
        </div>
    );
};
