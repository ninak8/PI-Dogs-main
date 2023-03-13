import React from "react";
import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";

const Landing = (props) => {
  return (
    <div className={style.landing}>
      <h2 className={style.title}>Dogy</h2>

      <div className={style.contentt}>
        <NavLink to="/home">
          <button className={style.button}>Home</button>
        </NavLink>
      </div>
    </div>
  );
};
export default Landing;
