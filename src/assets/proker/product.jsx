import React from "react";
import "/src/App.css"
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";

export const Product = (props) => {
    return (
            <div className="card">
                <img src={props.image} alt="Image-Profile" />
                <h2>{props.name}</h2>
                <div className="Desc-time"><FaRegCalendarDays /><p>{props.time}</p></div>
                <div className="Desc-location"><FaLocationDot /><p>{props.location}</p></div>
                <button>Lihat Proker</button>
            </div>
    );
};
