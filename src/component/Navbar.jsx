import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import iconImage from "/public/assets/img/Logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false); // Menutup menu saat item diklik
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen); // Toggle untuk membuka atau menutup dropdown
  };

  return (
    <div className="navbar-section">
      <nav className="container">
        <Link to="/" className="">
          <img src={iconImage} alt="Logo" />
          <p>
            HM TIF <br />
            UNISSULA
          </p>
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={handleMenuClick}>
              Beranda
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick();
              }}
            >
              Tentang Kami
            </NavLink>
            <ul
              className={dropdownOpen ? "dropdown-menu open" : "dropdown-menu"}
            >
              <li>
                <NavLink to="/tentang/sejarah" onClick={handleMenuClick}>
                  Sejarah
                </NavLink>
              </li>
              <li>
                <NavLink to="/tentang/visi-misi" onClick={handleMenuClick}>
                  Visi Misi
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/program" onClick={handleMenuClick}>
              Program Kerja
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontak" onClick={handleMenuClick}>
              Kontak
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
