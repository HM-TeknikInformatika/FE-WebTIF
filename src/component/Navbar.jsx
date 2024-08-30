import React, {useState} from "react";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <nav>
            <Link to="/">
                <a href="">
                    <img src="" alt="Logo" />
                    <p>HM TIF <br /> UNISSULA</p>
                </a>
            </Link>
            <div className="menu" onClick={() => {setMenuOpen(!menuOpen);}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Beranda</NavLink>
                </li>
                <li>
                    <NavLink to="/tentang">Tentang Kami</NavLink>
                </li>
                <li>
                    <NavLink to="/program">Program Kerja</NavLink>
                </li>
                <li>
                    <NavLink to="/pendaftaran">Pendaftaran</NavLink>
                </li>
                <li>
                    <NavLink to="/kontak">Kontak</NavLink>
                </li>
            </ul>
        </nav>
    );
};
