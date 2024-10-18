import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../assets/proker/product";
import { productData, responsive } from "../assets/proker/data";

export const Artikel = () => {
    // Filter hanya produk dengan status false
    const filteredProductData = productData.filter(item => item.status === false);

    return (
        <div className="program-kerja container">
            <h1>Artikel 2023 - 2024</h1>

            {/* Cek apakah ada produk yang sesuai, jika tidak ada tampilkan pesan */}
            {filteredProductData.length === 0 ? (
                <p>Belum ada artikel...</p>
            ) : (
                <Carousel 
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    infinite={true}
                >
                    {filteredProductData.map((item) => (
                        <Product
                            key={item.id} // Tambahkan key yang unik
                            name={item.name}
                            image={item.Image}
                            time={item.descTime}
                            location={item.descLocation}
                        />
                    ))}
                </Carousel>
            )}
        </div>
    );
};
