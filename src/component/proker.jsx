import React from "react";
import "/src/App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../assets/proker/product";
import { productData, responsive } from "../assets/proker/data";

export const Proker = () => {
    // Filter hanya produk dengan status false
    const filteredProductData = productData.filter(item => item.status === true);

    // Map data yang sudah difilter ke dalam komponen Product
    const product = filteredProductData.map((item) => (
        <Product
            key={item.id} // Tambahkan key yang unik
            name={item.name}
            image={item.Image}
            time={item.descTime}
            location={item.descLocation}
        />
    ));

    return (
        <div className="program-kerja container">
            <h1>Program Kerja 2023 - 2024</h1>
            {filteredProductData.length === 0 ? (
                <p>Belum ada program kerja...</p>
            ) : (
                <Carousel 
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    infinite={true}
                >
                    {product}
                </Carousel>
            )}
        </div>
    );
};
