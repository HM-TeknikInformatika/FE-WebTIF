import { FaArrowLeft, FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import defaultImage from "../../../../public/assets/img/Logo.png";
import { productData } from "../../../assets/proker/data";
import { useEffect } from "react";


export const ProkerPage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Ambil ID dari URL

    // Temukan produk berdasarkan ID dari URL
    const product = productData.find(item => item.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // Debugging: Cek id yang diterima
    console.log("ID from URL: ", id);

    return (
        <div className="proker-page container">
            <div className="proker-btn-back container">
                <a onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </a>
            </div>

            {product ? ( // Cek apakah produk ditemukan
                <div className="proker-body">
                    <div className="proker-img">
                        <img src={product.image || defaultImage} alt={product.name} />
                    </div>
                    <div className="proker-detail">
                        <h2 className="proker-title">{product.name}</h2>
                        <div className="proker-time">
                            <FaRegCalendarDays />
                            <p>
                                {product.descTime}
                            </p>
                        </div>
                        <div className="proker-location">
                            <FaLocationDot />
                            <p>
                                {product.descLocation}
                            </p>
                        </div>
                        <div className="proker-desc">
                            <p>
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Data tidak ditemukan</p> // Tampilkan pesan jika produk tidak ditemukan
            )}
        </div>
    );
};
