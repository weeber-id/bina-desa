import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__lists">
        <NavLink
          className="sidebar__link"
          activeClassName="active"
          to="/pengajuan"
        >
          <div className="sidebar__list">Data Pengajuan</div>
        </NavLink>
        <NavLink
          className="sidebar__link"
          activeClassName="active"
          to="/keluhan"
        >
          <div className="sidebar__list">Keluhan</div>
        </NavLink>
        <NavLink
          className="sidebar__link"
          activeClassName="active"
          to="/berita"
        >
          <div className="sidebar__list">Berita</div>
        </NavLink>
      </div>
      <div className="sidebar__logout">Logout</div>
    </div>
  );
};

export default Sidebar;
