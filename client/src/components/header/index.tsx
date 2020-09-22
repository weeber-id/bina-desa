import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoTelukJambe } from '../../assets';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container max-width-1200">
        <div className="navbar__brand">
          <Link to="/">
            <LogoTelukJambe />
          </Link>
        </div>
        <ul className="navbar__lists">
          <li className="navbar__item">
            <NavLink className="navbar__link" activeClassName="active" to="/">
              Beranda
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="active"
              to="/form"
            >
              Daftar Pengajuan
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="active"
              to="/informasi-umum"
            >
              Informasi Umum
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="active"
              to="/berita"
            >
              Berita
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
