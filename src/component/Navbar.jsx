import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)


    return (
            <nav className="">
            <Link to="/">
                <a href="">
                    <img src="./src/assets/img/Logo.png" alt="Logo" />
                    <p>HM TIF <br /> UNISSULA</p>
                </a>
            </Link>
            <div className="menu" onClick={() => { setMenuOpen(!menuOpen); }}>
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
