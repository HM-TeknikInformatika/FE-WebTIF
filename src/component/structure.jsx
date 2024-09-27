import "/src/App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../assets/structure/product";
import { productData, responsive } from "../assets/structure/data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Structure = () => {
    const product = productData.slice(0, 4).map(item => (
        <Product
        key={item.id}
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
                <Link to="/StructurePage">Lihat Selengkapnya <FaArrowUpRightFromSquare /></Link>
            </div>
        </div>
        </div>
    );
};
