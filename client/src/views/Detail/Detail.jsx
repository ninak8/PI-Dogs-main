import React from "react";
import { getRaceById } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import style from "./Detail.module.css";
import Loader from "../../components/loader/loader";

const Detail = (props) => {
  const races = useSelector((state) => state.raceDetail);
  const id = props.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRaceById(id));
  }, [dispatch, id]);

  return (
    <div className={style.Detail}>
      {!races.id && <Loader />}
      <div className={style.buttonhome}>
        <NavLink to="/home">
          <button className={style.prev}> 🢀 Home</button>
        </NavLink>
      </div>
      <div>
        <div className={style.infoOne}>
          <div className={style.contentImg}>
            <img src={races.img} alt="not found" className={style.esto} />
          </div>
          <div>
            <h2>Name:</h2>
            <h1>{races.name}</h1>
          </div>
        </div>
        <div className={style.infoTwo}>
          <h4>Race: {races.race}</h4>
          <h4>Temperaments: {races.Temperament} </h4>
          <h4>Minimum weight: {races.weight_min} Kg </h4>
          <h4>Maximum weigth: {races.weight_max} Kg </h4>
          <h4>Minimum height: {races.weight_min} Ft</h4>
          <h4>Maximum height: {races.weight_max} Ft</h4>
          <h4>Minimum average life: {races.life_span_min} years</h4>
          <h4>Maximum average life: {races.life_span_max} years</h4>
        </div>
      </div>
    </div>
  );
};

export default Detail;
