import React from "react";
import "/src/App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../assets/structure/product";
import { productData, responsive } from "../assets/structure/data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const Structure = () => {
    const product = productData.map(item => (
        <Product
            name={item.name}
            img={item.image}
            job={item.job}
        />
    ))

    return (
        <div className="struktur">
            <div className="struktur-kepengurusan container">
            <h1>Struktur Kepengurusan 2023 - 2024</h1>
            <Carousel responsive={responsive}>
                {product}
            </Carousel>
            <div className="all-profile">
                <button>Lihat Selengkapnya <FaArrowUpRightFromSquare /></button>
            </div>
        </div>
        </div>
    );
};
