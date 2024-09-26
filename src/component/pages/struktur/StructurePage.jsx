import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Product } from "../../../assets/structure/product";
import { productData } from "../../../assets/structure/data";

export const StructurePage = () => {
    return (
        <>
            <div className="struckture-page">
                {/* Tombol Back */}
                <div className="structure-btn-back container">
                    <a href="/"><FaArrowLeft /></a>
                </div>
                
                {/* Judul Halaman */}
                <div className="struckture-title">
                    <h2>Struktur Kepengurusan HM TIF 2023 - 2024</h2>
                </div>
                
                {/* Tampilkan data produk */}
                <div className="structure-list container">
                    {productData.map((item) => (
                        <Product
                            key={item.id}
                            name={item.name}
                            img={item.image}
                            job={item.job}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
