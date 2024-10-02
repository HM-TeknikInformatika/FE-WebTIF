import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import iconImage from "/public/assets/img/Logo.png";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(false); // Menutup menu saat item diklik
    };

    return (
        <div className="navbar-section">
            <nav className="container">
                <Link to="/" className="">
                    <img src={iconImage} alt="Logo" />
                    <p>HM TIF <br />UNISSULA</p>
                </Link>
                <div className="menu" onClick={() => { setMenuOpen(!menuOpen); }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/" onClick={handleMenuClick}>Beranda</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tentang" onClick={handleMenuClick}>Tentang Kami</NavLink>
                    </li>
                    <li>
                        <NavLink to="/program" onClick={handleMenuClick}>Program Kerja</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/pendaftaran" onClick={handleMenuClick}>Pendaftaran</NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/kontak" onClick={handleMenuClick}>Kontak</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
