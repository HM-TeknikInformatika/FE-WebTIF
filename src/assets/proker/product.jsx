import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import defaultImage from "../../../public/assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Navigasi ke halaman detail dengan ID produk
        if (props.id) {
            console.log("Navigating to:", `/prokerpage/${props.id}`); // Debugging log
            navigate(`/prokerpage/${props.id}`);
        } else {
            console.error("ID is missing, cannot navigate to detail page.");
        }
    };

    return (
        <div className="card"> {/* 'key' seharusnya diberikan di tempat render, bukan di sini */}
            <img src={props.img || defaultImage} alt="Image-Profile" />
            <h2>{props.name}</h2>
            <div className="Desc-time">
                <FaRegCalendarDays />
                <p>{props.time}</p>
            </div>
            <div className="Desc-location">
                <FaLocationDot />
                <p>{props.location}</p>
            </div>
            <button onClick={handleButtonClick} disabled={!props.id}> {/* Nonaktifkan tombol jika ID tidak ada */}
                Lihat Proker
            </button>
        </div>
    );
};
