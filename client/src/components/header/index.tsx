import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LogoTelukJambe } from '../../assets';

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <nav className="navbar">
      <div className="navbar__container max-width-1200">
        <div className="navbar__brand">
          <Link to="/">
            <LogoTelukJambe />
          </Link>
        </div>
        <div className={`navbar__brand-mobile ${!collapse ? 'collapse' : ''}`}>
          <Link to="/">
            <LogoTelukJambe />
          </Link>
        </div>
        <div
          onClick={() => setCollapse(!collapse)}
          className="navbar__hamburger-container"
        >
          <div className={`navbar__hamburger ${!collapse ? 'collapse' : ''}`} />
        </div>
        <ul className={`navbar__lists-mobile ${!collapse ? 'collapse' : ''}`}>
          <li className="navbar__item-mobile">
            <Link to="/" className="navbar__link-mobile">
              Beranda
            </Link>
          </li>
          <li className="navbar__item-mobile">
            <Link to="/form" className="navbar__link-mobile">
              Daftar Pengajuan
            </Link>
          </li>
          <li className="navbar__item-mobile">
            <Link to="/informasi-umum" className="navbar__link-mobile">
              Informasi Umum
            </Link>
          </li>
          <li className="navbar__item-mobile">
            <Link to="/berita" className="navbar__link-mobile">
              Berita
            </Link>
          </li>
        </ul>
        <ul className="navbar__lists">
          <li className="navbar__item">
            <Link
              className={`navbar__link ${pathname === '/' ? 'active' : ''}`}
              to="/"
            >
              Beranda
            </Link>
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
