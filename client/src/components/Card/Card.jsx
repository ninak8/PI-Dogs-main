import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <a href={`/detail/${props.id}`}>
      <div className={style.card}>
        <div className={style.divImg}>
          <img src={props.img} alt="not found" className={style.esto} />
        </div>
        <div className={style.infoCard}>
          <h4 className={style.name}>Name: {props.name}</h4>
          <h5 className={style.temperaments}>
            Temperaments: {props.Temperaments}{" "}
          </h5>
          <h5 className={style.weight}>
            Weight: Min {props.weight_min} - Max {props.weight_max}{" "}
          </h5>
          <div className={style.buttonGuau}>
            <Link to={`/detail/${props.id}`}>
              <button className={style.guau}>GUAU!</button>
            </Link>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
