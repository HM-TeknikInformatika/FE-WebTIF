import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../../footer";
import { Product } from "../../../assets/proker/product";
import { productData } from "../../../assets/proker/data"; // Pastikan untuk mengimpor data produk

export const Program = () => {
    // Scroll ke atas saat komponen di-mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="proker-page container">
                {/* Tombol Back */}
                <div className="proker-btn-back">
                    <a href="/">
                        <FaArrowLeft />
                    </a>
                </div>
                
                {/* Judul Halaman */}
                <div className="proker-title">
                    <h2>Program Kerja HM TIF 2023 - 2024</h2>
                </div>
                
                {/* Tampilkan data produk dalam bentuk grid */}
                <div className="proker-list">
                    {productData.length === 0 ? (
                        <p>Belum ada program kerja...</p>
                    ) : (
                        productData.map((item) => (
                            <Product
                                key={item.id} // Tambahkan key yang unik
                                id={item.id} // Pastikan menambahkan id untuk navigasi
                                name={item.name}
                                img={item.image} // Pastikan ini sesuai dengan property gambar
                                time={item.descTime}
                                location={item.descLocation}
                            />
                        ))
                    )}
                </div>
            </div>
            
            <Footer />
        </>
    );
};
