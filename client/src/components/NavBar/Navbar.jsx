import React from "react";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className={style.navBar}>
      <div className={style.contentButton}>
        <button className={style.buttonRefresh} onClick={refresh}>
          Refresh
        </button>
      </div>
      <div className={style.search}>
        <SearchBar />
      </div>
      <div className={style.contentButton}>
        <NavLink to="/form">
          <button className={style.buttonCreate}>Create Pet</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
